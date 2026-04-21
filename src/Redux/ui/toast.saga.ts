import { put } from "redux-saga/effects";
import { toastActions } from "./toast.slice";

export function* handleApiResponse(
    data: { success?: boolean; message?: string }
) {
    if (!data) return;

    if (data.success) {
        if (data.message) {
            yield put(
                toastActions.showToast({
                    type: "success",
                    message: data.message,
                })
            );
        }
    } else {
        if (data.message) {
            yield put(
                toastActions.showToast({
                    type: "error",
                    message: data.message,
                })
            );
        }
    }
}

export function* handleApiError(error: unknown) {
    let message = "Unexpected error";

    if (error instanceof Error) {
        message = error.message;
    }

    yield put(
        toastActions.showToast({
            type: "error",
            message,
        })
    );
}