import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
    "[Login Page] User Login ", //convention "[source of the action in the application] the command that the actions corresponds to"
     props<{user: User}>()
);

export const logout = createAction(
    "[Top Menu] Logout"
);