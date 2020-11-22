import React from 'react'
import Jumbodata from '../fixtures/jumbo.json'
import Jumbotron from '../components/jumbotron'

function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {Jumbodata.map((item) => (
                <Jumbotron
                    key={item.id}
                    direction={item.direction}
                    children={item}
                />
            ))}
        </Jumbotron.Container>
    )
}

export default JumbotronContainer
