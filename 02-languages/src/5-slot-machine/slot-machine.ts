interface Roulette {
    status: boolean
}


class SlotMachine {
    private coins: number = 0;

    private generateRandomRouletteResults(): Roulette[] {
        return [
            { status: Math.random() < 0.4 },
            { status: Math.random() < 0.4},
            { status: Math.random() < 0.4}
        ];
    }
    play(){
        const rouletteResults = this.generateRandomRouletteResults();
        this.coins++;
        const isStatus = rouletteResults.every(result => result.status);

        if(isStatus){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
            
        } else {
            console.log('Good luck next time!!');
            
        }
        
    }
}

const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();