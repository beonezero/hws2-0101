import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = s.button + (
        disabled
        ? ` ${s.disabled}`
        : xType === "red" ? ` ${s.red}`
        : xType === "secondary" ? ` ${s.secondary}`
        : ` ${s.default}`
    )

    // Если disable === true то один стиль
    // Если нет, то проверяем  xType
    // Если он red  то один стиль
    // Если secondary то другой стиль
    // Если и он нет то дефолтное значение
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отд аём кно пке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
