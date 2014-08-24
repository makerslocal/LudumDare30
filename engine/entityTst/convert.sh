
for i in *.js
do
	j=$(ls $i | awk '{print $9}' | awk '{FS="."; print $2"."$3}')
	echo $j  #${ls $i | awk '{print $9}' | awk '{FS="."; print $2"."$3}'}
done
