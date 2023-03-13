mkdir output
cd output
mkdir HTML
cd ..
pandoc -d "default-public.yaml" -t html -o "output/HTML/Public.html" --embed-resources --standalone
