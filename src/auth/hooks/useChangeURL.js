import { useNavigate } from 'react-router-dom'

export const useChangeURL = (url, canGoBack) => {
	const navigate = useNavigate()

	const handleChangeUrl = () => {
		navigate(url, {
			replace: canGoBack,
		})
	}

	return { handleChangeUrl }
}
