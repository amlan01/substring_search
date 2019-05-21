function checkSubstring()
{
	var string1 = prompt("Enter String ?","Examination");
	var string2 = prompt("Enter Substring to be searched","min");
    for(i = 0; i < (string1.length) - ((string2.length) - 1); i++)
    {
        let counter = 0;
		let x = i;
        for(j = 0; j < string2.length; j++)
        {
            if(string1[x] == string2[j])
            {
                counter += 1;
            }
			x += 1;
        }
        if(counter == string2.length) console.log("Substring: "+string2+" exists !");
    }
}