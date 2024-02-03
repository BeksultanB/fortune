import camelCaseToHtmlAttribute from "shared/utils/camelCaseToHtmlAttribute";

const SvgPreviewer = ({ svg, ...props }: any) => {
    const svgProps = Object.keys(props);
    let modifiedSvg = svg;
    if (svgProps.length) {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svg, "image/svg+xml");
        const svgEl = svgDoc.querySelector("svg");
        for (let prop of svgProps) {
            const attribute = camelCaseToHtmlAttribute(prop);
            svgEl?.setAttribute(attribute, props[prop])
        }
        svgEl?.setAttribute("class", "svg-preview");
        const serializer = new XMLSerializer();
        modifiedSvg = serializer.serializeToString(svgDoc);
    }

    return svg && <div dangerouslySetInnerHTML={{ __html: modifiedSvg }} {...props} />
}

export default SvgPreviewer;