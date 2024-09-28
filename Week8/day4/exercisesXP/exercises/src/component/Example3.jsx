import React, {Component} from "react";

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: [],
        };
    }

    async componentDidMount() {
        await this.fetchInfo();
    }

    fetchInfo = async () => {
        try {
            const res = await fetch('/dataEx3.json');
            console.log(res);
            const data = await res.json();
            const experiences = data.Experiences;
            console.log(experiences);
            this.setState({experiences});
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <>
                <h3>Example3</h3>
                {this.state.experiences.map((company) => (
                    <div>
                        <img src={company.logo} alt=""/><br/>
                        <a href={company.url}>{company.companyName}</a>
                        <h3>{company.roles[0].title}</h3>
                        <p>{company.roles[0].startDate} {company.roles[0].location}</p>
                        <p>{company.roles[0].description}</p>
                    </div>
                ))}
            </>
        )
    }
}

export default Example3;