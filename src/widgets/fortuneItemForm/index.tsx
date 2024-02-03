
import { Controller, FormProvider, useForm } from "react-hook-form";
import s from "./FortuneItemForm.module.scss"
import FortuneItem from "entities/fortuneItem";
import { FC, useEffect } from "react";
import SvgInput from "shared/components/SvgInput";
import TextInput from "shared/components/TextInput";
import ColorInput from "shared/components/ColorInput";
import SvgPreviewer from "shared/components/SvgPreviewer";
import IFortuneItem from "shared/api/IndexedDB/FortuneItems/model";
import { DefaultFortuneItemIcon } from "shared/api/IndexedDB/FortuneItems/initialData";
import Button from "shared/ui/buttons/Button";

export type Mode = "create" | "update"

interface Props {
    mode: Mode,
    data?: any,
    setData?: any,
    submitHandler?: any
}

const defaultValues = {
    icon: DefaultFortuneItemIcon,
    value: '',
    label: '',
    color: '#f0f0f0',
}

const FortuneItemForm: FC<Props> = ({ mode, data, setData, submitHandler }: any) => {
    const methods = useForm<IFortuneItem>({ defaultValues })
    const { handleSubmit, control, watch, reset } = methods;
    watch()

    async function onSubmit(data: any) {
        await submitHandler(data);
        if ("success") reset(defaultValues);
    }

    useEffect(() => {
        (mode === "update") && reset(data)
    }, [data, mode]);

    return (
        <FormProvider {...methods}>
            <div className={s.wrapper}>
                <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.container}>
                        <Controller
                            control={control}
                            name="label"
                            render={({ field }: any) => (
                                <TextInput
                                    defaultValue={field.value}
                                    onChange={field.onChange}
                                    maxLength={20}
                                    placeholder="Название приза"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="value"
                            render={({ field }: any) => (
                                <TextInput
                                    defaultValue={field.value}
                                    onChange={field.onChange}
                                    maxLength={12}
                                    placeholder="value"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="icon"
                            render={({ field }: any) => (
                                <SvgInput
                                    defaultValue={field.value}
                                    onChange={field.onChange}
                                    placeholder="Выберите картинку"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="color"
                            render={({ field }: any) => (
                                <ColorInput
                                    defaultValue={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </div>
                    <div className={s.buttons}>
                        <Button className={s.resetButton} onClick={(e: any) => {
                            e.preventDefault();
                            setData(defaultValues)
                        }}>
                            Очистить
                        </Button>
                        <Button className={s.saveButton} type="submit">Сохранить</Button>
                    </div>
                </form>
                <div className={s.previewContainer}>
                    <FortuneItem showValue className={s.fortuneItem} data={methods.getValues()} />
                </div>
            </div>
        </FormProvider>
    );
}

export default FortuneItemForm;