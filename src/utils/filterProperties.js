export function filterProperties(properties, searchText) {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (!normalizedSearch) {
        return properties;
    }

    return properties.filter((property) => {
        return (
            property.title.toLowerCase().includes(normalizedSearch) ||
            property.location.toLowerCase().includes(normalizedSearch) ||
            property.type.toLowerCase().includes(normalizedSearch)
        );
    });
}