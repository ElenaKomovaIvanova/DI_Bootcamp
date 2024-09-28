import React, { Component } from "react";

class Example2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programmingLanguage: [],
            webBased: []
        };
    }

    async componentDidMount() {
        await this.fetchInfo();
    }

    fetchInfo = async () => {
        try {
            const res = await fetch('/dataEx3.json');
            const data = await res.json();
            const programmingLanguage = language[0].SkillSet;
            const webBased = language[1].SkillSet;
            this.setState({ programmingLanguage, webBased });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { programmingLanguage, webBased } = this.state;
        return (
            <>
                <div>
                    <h3>Programming Language</h3>
                    {programmingLanguage.map((language, index) => (
                        <p key={index}>{language.Name}</p>
                    ))}
                </div>
                <div>
                    <h3>Web-Based Application Development</h3>
                    {webBased.map((language, index) => (
                        <p key={index}>{language.Name}</p>
                    ))}
                </div>
            </>
        );
    }
}

export default Example2;
