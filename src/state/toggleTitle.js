
export const titleState = {
    isTitleUpdated: false
};

export const toggleTitle = () => {
    titleState.isTitleUpdated = !titleState.isTitleUpdated;
};

export const getComputedTitle = (bodyTitle) => {
    return titleState.isTitleUpdated ? "Updated title with state!" : bodyTitle;
};