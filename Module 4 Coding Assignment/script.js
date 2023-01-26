var names=new Array();
names[0]="Dwij";
names[1]="Jotuuu";
names[2]="Shubham";
names[3]="Khushi";
names[4]="Pankti";
names[5]="Dhruv";
names[6]="Rajat";
names[7]="Brijesh";
names[8]="Smit";
names[9]="Parth";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}