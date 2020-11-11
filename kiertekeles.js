function kiertekeles(){
    var num1, num2, num3, num4, num5, num6, num7, num8, num9, res,
    num1=Number(document.formcalc.szempont1.value)
    num2=Number(document.formcalc.szempont2.value)
    num3=Number(document.formcalc.szempont3.value)
    num4=Number(document.formcalc.szempont4.value)
    num5=Number(document.formcalc.szempont5.value)
    num6=Number(document.formcalc.szempont6.value)
    num7=Number(document.formcalc.szempont7.value)
    num8=Number(document.formcalc.szempont8.value)
    num8=Number(document.formcalc.szempont9.value)
    res=num1+num2+num3+num4+num5+num6+num7+num8+num9;
    document.formcalc.txtres.value=res;
}