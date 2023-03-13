mkdir output
cd output
mkdir Word
cd ..
pandoc -d "default-public.yaml" -t docx -o "output/Word/Public.docx"