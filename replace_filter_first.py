import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # .filter { ... }.firstOrNull() -> .firstOrNull { ... }
    new_content = re.sub(r'\.filter\s*\{\s*(.*?)\s*\}\s*\.firstOrNull\(\)', r'.firstOrNull { \1 }', content)

    # .filter { ... }.first() -> .first { ... }
    new_content = re.sub(r'\.filter\s*\{\s*(.*?)\s*\}\s*\.first\(\)', r'.first { \1 }', new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('.'):
    for file in files:
        if file.endswith('.kt'):
            process_file(os.path.join(root, file))
