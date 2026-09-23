import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = re.sub(
        r'\.map\s*\{\s*([^}]*?)\s*\}\s*\.filterNotNull\(\)\s*\.firstOrNull\(\)',
        r'.firstNotNullOfOrNull { \1 }',
        content
    )

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('.'):
    for file in files:
        if file.endswith('.kt') and 'rewrite.py' not in file and 'replace_first_not_null_of.py' not in file:
            process_file(os.path.join(root, file))
