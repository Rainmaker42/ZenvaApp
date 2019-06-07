import { types } from "mobx-state-tree"

const Input = types.model({
    name: types.optional(types.string, "")


}
)
    .actions(self => ({
        setText(TextName: string)
        {
            self.name = TextName;
            console.log(self.name);
        }
    }))


export default Input;