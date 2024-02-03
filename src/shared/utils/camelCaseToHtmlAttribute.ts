function camelCaseToHtmlAttribute(camelCaseString: any) {
    return camelCaseString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export default camelCaseToHtmlAttribute
