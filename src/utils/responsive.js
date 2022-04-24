import { useMediaQuery } from 'react-responsive'

export const useIsBigScreenMode = () => {
    return useMediaQuery({ query: '(min-width: 576px)' })
}