#[semper-fit.net](http://www.semper-fit.net)

1. Install global dependencies
	```
	gem install jekyll && npm install -g grunt-cli
	```

2. Fire listeners
	```
	jekyll serve --watch
	```

3. Do work...
	```
	vi <filename>
	```

4. Final build and commit
	```
	grunt build
	git add <filenames>
	git commit
	git push origin master
	```
