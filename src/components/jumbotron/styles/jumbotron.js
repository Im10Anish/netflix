import styled from 'styled-components/macro'

export const Inner = styled.div((p) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: `${p.direction}`,
    width: '100%',
    margin: 'auto',
    maxWidth: '1100px',

    [`@media (max-width: 1000px)`]: {
        flexDirection: 'column',
    },
}))

export const Item = styled.div((p) => ({
    display: 'flex',
    borderBottom: '8px solid #222',
    padding: '50px 5%',
    color: 'white',
    overflow: 'hidden',
}))

export const Pane = styled.div({
    width: '50%',

    [`@media (max-width: 1000px)`]: {
        width: '100%',
        padding: '0 45px',
        textAlign: 'center',
    },
})

export const Title = styled.h1({
    fontSize: '50px',
    lineHeight: '1.1',
    marginBottom: '8px',

    [`@media (max-width: 600px)`]: {
        fontSize: '35px',
    },
})

export const SubTitle = styled.h3({
    fontSize: '26px',
    fontWeight: 'normal',
    lineHeight: 'normal',

    [`@media (max-width: 600px)`]: {
        fontSize: '18px',
    },
})

export const Image = styled.img({
    maxWidth: '100%',
    height: 'auto',
})

export const Container = styled.div({})
