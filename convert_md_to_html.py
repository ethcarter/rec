import os
import markdown

# Source directory
source_dir = 'record/cpp/experiments/'

# Destination directory
dest_dir = 'record/cpp/new_cpp/'

# Ensure destination directory exists
os.makedirs(dest_dir, exist_ok=True)

# Loop through all .md files in source directory
for filename in os.listdir(source_dir):
    if filename.endswith('.md'):
        # Read the markdown file
        with open(os.path.join(source_dir, filename), 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # Convert to HTML
        html_content = markdown.markdown(md_content)
        
        # Write to HTML file
        html_filename = filename.replace('.md', '.html')
        with open(os.path.join(dest_dir, html_filename), 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f'Converted {filename} to {html_filename}')

print('All conversions completed.')