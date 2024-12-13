interface TPropsEllipse {
    height?: string | number | undefined,
    width?: string | number | undefined,
}


const Ellipse = ({height, width}: TPropsEllipse) => {
    return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width}  height={height} viewBox="0 0 375 23.7">
                <path
                    d="M 0 0 A 250 70 0 0 0 375 0 Z"/>
            </svg>


    )
}

export default Ellipse