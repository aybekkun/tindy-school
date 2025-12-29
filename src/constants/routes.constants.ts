export const ROUTES = {
	HOME: "/",
	CART: "/cart",
	MY_ORDERS: "/my-orders",

	AUTH: {
		LOGIN: (redirectTo?: string) =>
			redirectTo ? `/login?redirectTo=${redirectTo}` : "/login",
		REGISTER: (redirectTo?: string) =>
			redirectTo ? `/register?redirectTo=${redirectTo}` : "/register",
		VERIFY: "/register/verify",
		FORGOT_PASSWORD: "/forgot-password",
	},

	COURSES: {
		ROOT: "/courses",
		SINGLE: (id: string) => `/courses/${id}`,
		LESSON: (courseId: string, lessonId: string) =>
			`/course/${courseId}/${lessonId}`,
	},
	COLLECTIONS: {
		ROOT: "/collections",
		SINGLE: (slug: string) => `/collections/${slug}`,
	},

	PROFILE: {
		ROOT: "/student",
		MY_COURSES: "/student/my-courses",
		CERTIFICATES: "/student/certificates",
		SETTINGS: "/student/settings",
	},

	CERTIFICATE: {
		PUBLIC: (id: string) => `/certificate/${id}`,
	},
} as const
