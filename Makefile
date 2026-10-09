IP := `ipconfig getifaddr en0`
URL := http://$(IP):1313

serve:
	hugo serve -D --bind 0.0.0.0 --baseURL $(URL)

push:
	hugo --minify 
	cp -R public/* ../heades.github.io/.
	cd ../heades.github.io && git add . && git commit -a -m 'Updating site.' && git push
