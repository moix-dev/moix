all:
	@echo "main [option]"

save:
	@git add .
	@git commit -m $(shell date -Iseconds)
	@git push origin main
