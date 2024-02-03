
const SvgPreviewer = ({ svg, ...props }: any) => {

    return svg && <div dangerouslySetInnerHTML={{ __html: svg }} {...props} />
}

export default SvgPreviewer;