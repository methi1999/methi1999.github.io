# Rebuild PDF on change; copy into the site's assets folder on success.
$pdf_mode = 1;
$pdflatex = 'pdflatex -interaction=nonstopmode -synctex=1 -file-line-error %O %S';
$out_dir = '.';
$aux_dir = '.';

$ENV{'TEXINPUTS'} = './moderncv//:' . ($ENV{'TEXINPUTS'} // '');

$success_cmd = 'mkdir -p ../assets/pdf && cp -f %D ../assets/pdf/%R.pdf';
