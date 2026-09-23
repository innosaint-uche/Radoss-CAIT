import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Match `.mapNotNull { ... }.firstOrNull()`
    # Match `.mapNotNull { ... }.firstOrNull()`
    # Handle single line for simplicity as that matches our cases

    new_content = re.sub(
        r'\.mapNotNull\s*\{\s*([^}]*?)\s*\}\s*\.firstOrNull\(\)',
        r'.firstNotNullOfOrNull { \1 }',
        content
    )

    # Also handle `.asSequence().mapNotNull { ... }.firstOrNull()`
    new_content = re.sub(
        r'\.asSequence\(\)\s*\.firstNotNullOfOrNull\s*\{',
        r'.firstNotNullOfOrNull {',
        new_content
    )

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('.'):
    for file in files:
        if file.endswith('.kt') and 'rewrite.py' not in file:
            process_file(os.path.join(root, file))
