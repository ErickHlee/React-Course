// É uma utilizade para o Tailwind para que não fique muito poluído visualmente
// Permite que eu quebre a linha com a vírgula para melhor organização.


// 
import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'


export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
};