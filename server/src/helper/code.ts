const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

export const modifyPhone = (originalPhone: string): string => {

    var phone = "+54"

    return phone += originalPhone

}

export const generateCode = (): string => {

    var code = ""

    for(var i = 0; i < 6; i++) {
        var char = randomCharacter(characters)
        code+=char[0]
    }

    return code

}

const randomCharacter = (array: string[]) => {

    var currentIndex = array.length
    var randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;

}