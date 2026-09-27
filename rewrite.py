import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # .map { ... }.filterNotNull().firstOrNull()
    # Note: this is a simple regex, might not cover multiline perfectly, but let's test it.
    new_content = re.sub(r'\.map\s*\{\s*(.*?)\s*\}\s*\.filterNotNull\(\)\s*\.firstOrNull\(\)', r'.firstNotNullOfOrNull { \1 }', content)

    # .mapNotNull { ... }.firstOrNull()
    new_content = re.sub(r'\.mapNotNull\s*\{\s*(.*?)\s*\}\s*\.firstOrNull\(\)', r'.firstNotNullOfOrNull { \1 }', new_content)

    # .asSequence().mapNotNull { ... }.firstOrNull()
    new_content = re.sub(r'\.asSequence\(\)\s*\.mapNotNull\s*\{\s*(.*?)\s*\}\s*\.firstOrNull\(\)', r'.firstNotNullOfOrNull { \1 }', new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('.'):
    for file in files:
        if file.endswith('.kt'):
            process_file(os.path.join(root, file))
