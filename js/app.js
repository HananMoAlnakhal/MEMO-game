
$(function(){

    var tone1="assets/tone.wav";
    var tone2="assets/tone_negative.wav";
    var tone3= "assets/tone5.wav";
    var tone4= "assets/tone4.wav";
    var win= new Audio("assets/mixkit-completion-of-a-level-2063.wav");
    var lose= new Audio("assets/tone2.wav");
    var tones=[tone1,tone2,tone3,tone4]
    $('.squer').attr('disabled' , 'true' );
    var clickCount = 0;
    var $result=$('.results')
    $result.html('press START <br><i class="fa-regular fa-grin-alt" style="margin-left:100px"> </i>');
    var LevelCount=5;
    var nums=[]; 
    var level=0;
    var levelNums =[];
    var clickCount = 0;
    var $result=$('.results')
    $result.html('press START <br><i class="fa-regular fa-grin-alt"> </i>');
    $('.squer').attr('disabled' , 'true' ); 
    function RandomNum1toN(n){var num=Math.floor(Math.random()*n) +1;return num}
    function reset(){
        nums=[]; 
        level=1;
        clickCount=0
        $('.Xscore').html("0");
        for(var i=0;i<LevelCount;i++){
            nums.push(RandomNum1toN(4))}
        levelNums=[nums[0]]
        display_list(levelNums)
        $('.squer').removeAttr('disabled');}

    function update_level(){
        $('.Xscore').html(level)
        clickCount=0
        level+=1
        levelNums.push(nums[level-1])
        display_list(levelNums)
        $('.squer').removeAttr('disabled');
    }

    function display_list(listii){
        var $target;
        $('.squer').attr('disabled' , 'true' );
        for (let i=0; i <listii.length ;i++){
            setTimeout(function(){
                var val=listii[i]-1
                $target=$('.squer').eq(val)  
                $target.addClass("displaied").queue(function(){
                    setTimeout(function(){
                        new Audio(tones[val]).play()
                        $target.removeClass('displaied').dequeue();
                    },300)
                })
            },(i+1)*1000);}}

    $("#start").on('click',function(){
        reset();
        $('#start').slideUp();
        $('.squer').removeAttr('disabled');
        $result.html("Be careful");})

    function lost(){
        lose.play()
        $result.html("you have lost");
        $('.Xscore').html(level-1);
        $("#start").html('play Again');
        $("#start").slideDown();}
    function won(){
        win.play()
        $result.html("you are a WINNER!!!");
        $('.Xscore').html(level);
        $("#start").html('play Again');
        $("#start").slideDown();}

    function SeeUpdate(but){
        clickCount++
        if (levelNums[clickCount-1]!=but){
            lost()
        }else{
            if(clickCount===levelNums.length){
                if (level<LevelCount){
                    update_level()
                }else{
                    won()}}}}
    $("#1").on('click',function(){
        new Audio("assets/tone.wav").play()
        SeeUpdate(1)})
    $("#2").on('click',function(){
        new Audio("assets/tone_negative.wav").play()
        SeeUpdate(2)})    
    $("#3").on('click',function(){
        new Audio("assets/tone5.wav").play()
        SeeUpdate(3)})  
    $("#4").on('click',function(){
        new Audio("assets/tone4.wav").play()
        SeeUpdate(4)})
})