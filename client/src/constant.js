export const INIT_STATE = {
    posts: {
        isLoading: false,
        data: [],
        request: {},
        error: undefined,
        requestDelete: {},
        requestUpdate: {},
        requestGetDetail: "",
        responseDelete: 0,
        responseUpdate: 0,
        responseDetail: {},
        requestSearch: { searchValue: "" },
    },
    modal: {
        isShow: true,
        id: "",
    },
    auth: {
        request: {},
        error: {},
        response: {},
        requestRegister: {},
        responseRegister: 0,
    },
    likePost: {
        requestSave: {},
        requestDelete: {},
        error: {},
        response: {},
        responseSavePost: "",
        responseDeletePost: "",
        mapLikePost: new Map(),
        mapTotalLikePost: new Map(),
        currentPost: "",
    },
    user: {
        requestUpdate: {},
        responseGetAll: [],
        responseUpdate: 0,
    },
};

export const API_URL = "http://localhost:5000/api";
