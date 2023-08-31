import React from "react"
const SplitSection = (props) => {
    const {children, isFullWrapper} = props

    const wrapperStyle = {
        normal : "grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto items-center  px-6 md:px-8 gap-16 pt-16",
        full: "grid grid-cols-1 md:grid-cols-2 w-full mx-auto items-center bg-iapm-light-gray  px-6 md:px-8 gap-16 pt-16 bg"
    }
    
    return (
        <section className={isFullWrapper ? wrapperStyle.full : wrapperStyle.normal}>
            {children}
        </section>
    )
}