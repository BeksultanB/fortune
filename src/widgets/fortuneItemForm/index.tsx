
import { Controller, FormProvider, useForm } from "react-hook-form";
import s from "./FortuneItemForm.module.scss"
import FortuneItem from "entities/fortuneItem";
import BallIcon from "shared/ui/icon/BallIcon";
import { FC, useEffect } from "react";
import SvgInput from "shared/components/SvgInput";
import TextInput from "shared/components/TextInput";
import ColorInput from "shared/components/ColorInput";
import SvgPreviewer from "shared/components/SvgPreviewer";


interface Props {
    mode: "create" | "update",
    data?: any
}

const FortuneItemForm: FC<Props> = ({ mode, data, submitHandler }: any) => {
    const methods = useForm({
        defaultValues: {
            icon: BallIcon,
            value: 'AAAAA',
            label: 'LLLL',
            color: 'grey',
        }
    })
    const { handleSubmit, control, watch } = methods;
    watch()

    function onSubmit(data: any) {
        submitHandler(data);
        methods.reset(data);
    }

    useEffect(() => {
        (mode === "update") && methods.reset(data)
    }, [data]);

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
                            render={({ field }: any) => {
                                function handleSvgChange(svg: any) {
                                    const Icon: any = (props: any) => <SvgPreviewer svg={svg} {...props} />
                                    field.onChange(Icon);
                                }

                                return (
                                    <SvgInput
                                        defaultValue={field.value}
                                        onChange={handleSvgChange}
                                        placeholder="Выберите картинку"
                                    />
                                )
                            }}
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
                </form>
                <div className={s.previewContainer}>
                    <FortuneItem showValue className={s.fortuneItem} data={methods.getValues()} />
                </div>
            </div>
        </FormProvider>
    );
}

export default FortuneItemForm;