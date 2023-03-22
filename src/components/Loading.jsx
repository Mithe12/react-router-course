import React from 'react'

function Delayed({ wait = 500, children }) {

    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
        const id = window.setTimeout(() => setShow(true), wait)
        return () => window.clearTimeout(id)
    })
    return show === true ? children : null
}

export default function Loading() {
    return (
        <Delayed>
            <div className='loading center' />
        </Delayed>)
}