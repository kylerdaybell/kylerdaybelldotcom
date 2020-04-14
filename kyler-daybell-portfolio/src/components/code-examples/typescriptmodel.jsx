import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { Component } from 'react';
import '../../public/css/code.css';


class TypeScriptModel extends Component {
    code = `const bcrypt = require("bcryptjs");

    export class User {
        public readonly id: number|null;
        public readonly email: string;
        public readonly password: string;
        public readonly authorization: "none"|"user"|"admin";
        public constructor(id: number|null, email: string, password: string, authorization: "none"|"user"|"admin") {
            this.id = id;
            this.email = email;
            this.password = password;
            this.authorization = authorization;
        }
        public HashPassword(): User {
            const hashpassword = bcrypt.hashSync(this.password);
            const passwordhasheduser = new User(null, this.email, hashpassword, this.authorization);
            return passwordhasheduser;
        }
        public ValidatePassword(password: string): boolean {
            return bcrypt.compareSync(password, this.password);
        }
    
    }
    `
    render() {
        return (
            <>
                <h1 class="header">Typescript Model</h1>
                <div class="page-text">
                    <p>
                       a user model written in typescript
                    </p>
                </div>
                <div className="code">
                <SyntaxHighlighter  language="typescript" style={atomDark}>
                    {this.code}
                </SyntaxHighlighter>
                </div>
            </>
        );
    }
}

export default TypeScriptModel;