
export const introState = {
    isIntroStateUpdated: false,
};

export const toggleIntroText = () => {
    introState.isIntroStateUpdated = !introState.isIntroStateUpdated;
};

export const getComputedIntro = (bodyIntro) => {
    return introState.isIntroStateUpdated ? "The intro text is now updated with state!" : bodyIntro;
};