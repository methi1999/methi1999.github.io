.PHONY: all resume cv watch-resume watch-cv clean

all: resume cv

resume:
	latexmk -pdf resume.tex

cv:
	latexmk -pdf cv.tex

watch-resume:
	latexmk -pvc -pdf resume.tex

watch-cv:
	latexmk -pvc -pdf cv.tex

clean:
	latexmk -C
