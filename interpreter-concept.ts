interface IAbstractExpression {
    // All Terminal and Non-Terminal expressions will implement
    // an interpret method
    interpret(): number
}

class Numeral implements IAbstractExpression {
    // Terminal expression

    value: number

    constructor(value: string) {
        this.value = parseInt(value)
    }

    interpret(): number {
        return this.value
    }
}

class Add implements IAbstractExpression {
    
    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret(): number {
        return this.left.interpret() + this.right.interpret()
    }
}

class Subtract implements IAbstractExpression {
    
    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret(): number {
        return this.left.interpret() - this.right.interpret()
    }
}

class Multiply implements IAbstractExpression {
        
    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret(): number {
        return this.left.interpret() * this.right.interpret()
    }
}

class Divide implements IAbstractExpression {
        
    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret(): number {
        return this.left.interpret() / this.right.interpret()
    }
}

// The Client
const SENTENCE: string = '1 + 2 - 3 + 4 - 5'
console.log(SENTENCE)

const TOKENS: string[] = SENTENCE.split(' ')
console.log(JSON.stringify(TOKENS))

// Manual creation of AST

const AST: IAbstractExpression[] = []
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2])))
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4])))
AST.push(new Add(AST[1], new Numeral(TOKENS[6])))
AST.push(new Subtract(AST[2], new Numeral(TOKENS[8])))

const ASTRoot: IAbstractExpression = AST.pop()
console.log(ASTRoot.interpret())
console.dir(ASTRoot, {depth: null})
