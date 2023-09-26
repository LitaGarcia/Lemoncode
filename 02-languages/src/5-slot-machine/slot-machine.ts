interface Roulette {
    status: boolean
}

class SlotMachine {
    private coins: number = 0;

    private addCoin(): void {
        this.coins++;
    }

    private generateRandomRouletteResults(): Roulette[] {
        return [
            { status: Math.round(Math.random()) === 0 },
            { status: Math.round(Math.random()) === 0 },
            { status: Math.round(Math.random()) === 0 }
        ];
    }
    play(){
        this.addCoin();
        const rouletteResults = this.generateRandomRouletteResults();
        const isAWin = rouletteResults.every(result => result.status === true);
        if(isAWin){
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