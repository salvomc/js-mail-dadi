
let playButton = document.getElementById('play_button');

playButton.addEventListener('click', function()
{
    let player = Math.floor(Math.random() *6) + 1;
    let computer = Math.floor(Math.random() *6) + 1;
    if (player > computer)
        {
            console.log(player);
            console.log(computer);
            document.getElementById('result').innerHTML = 'Il Giocatore Vince';
        } 
            else if (player < computer) 
                {
                    console.log(player);
                    console.log(computer);
                    document.getElementById('result').innerHTML = ('Il Computer vince');
                }   
                    else 
                        {
                        console.log(player);
                        console.log(computer);
                        document.getElementById('result').innerHTML = ("Pareggio");
                        }
})