import { ImageResponse } from "next/server"

export const runtime = "edge"

export const size = {
	width: 50,
	height: 50,
}

export const contentType = "image/png"

export default function Icon() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<svg
				width={size.width}
				height={size.height}
				viewBox="0 0 51 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.5166 46.4199C18.2287 46.4203 16.9501 46.2001 15.7358 45.7687L15.1504 45.5607C13.5092 44.9757 11.7659 44.736 10.0287 44.8565L9.66744 44.8808C9.35726 44.9018 9.04612 44.8584 8.75328 44.7536C8.46044 44.6487 8.19215 44.4845 7.96502 44.2712C7.7379 44.0579 7.55678 43.8 7.43289 43.5134C7.309 43.2269 7.24497 42.9178 7.24479 42.6054C7.24274 41.982 7.48263 41.3824 7.91349 40.9339C8.34435 40.4855 8.93223 40.2235 9.55222 40.2037L15.6509 39.9695C15.8909 39.9687 15.9498 39.9034 15.9697 39.8825C16.0484 39.7732 16.0828 39.6378 16.0658 39.5039C16.0604 39.443 16.0427 39.3838 16.0139 39.33C15.9852 39.2761 15.9459 39.2286 15.8984 39.1904C15.8509 39.1522 15.7962 39.124 15.7376 39.1076C15.679 39.0912 15.6177 39.0868 15.5574 39.0947H3.2593C2.65926 39.0928 2.08448 38.8518 1.661 38.4246C1.23752 37.9974 0.999917 37.4188 1.0003 36.8158C0.994609 36.4095 1.07108 36.0062 1.22507 35.6305C1.37905 35.2548 1.60735 34.9144 1.89613 34.63C2.47321 34.0727 3.24479 33.7652 4.04506 33.7735L9.6528 33.9511C9.68044 33.9493 9.70735 33.9415 9.73162 33.9281C9.75589 33.9147 9.77692 33.8961 9.79321 33.8736C9.87105 33.7859 9.91256 33.6716 9.90922 33.5541L9.90408 33.4627C9.90408 33.3242 9.63036 33.1832 9.3609 33.1832H5.00831C4.46853 33.1825 3.95108 32.9666 3.56949 32.583C3.18789 32.1993 2.97331 31.6792 2.97281 31.1367C2.97207 30.4668 3.22861 29.8224 3.68898 29.3378C4.14935 28.8533 4.77802 28.566 5.44398 28.5358L7.32364 28.4478C7.59348 28.4351 7.85621 28.3567 8.08915 28.2192C8.3221 28.0818 8.51827 27.8894 8.66073 27.6588C8.80319 27.4281 8.88767 27.1661 8.90688 26.8953C8.92609 26.6245 8.87945 26.3531 8.77098 26.1044L8.6437 25.8111C7.73074 23.5972 7.45375 21.1704 7.8442 18.8063C9.72695 9.40593 17.6163 3.32211 27.01 4.03699C36.9233 4.77951 44.4487 12.6609 43.7852 21.6042C43.6848 22.9646 43.3967 24.3043 42.9294 25.5849L42.4729 27.029C42.4438 27.1207 42.4348 27.2177 42.4464 27.3133C42.4581 27.4089 42.4902 27.5008 42.5406 27.5828C42.5909 27.6647 42.6583 27.7347 42.7382 27.788C42.818 27.8413 42.9083 27.8767 43.003 27.8916L45.4274 28.272C46.0427 28.3658 46.6039 28.6788 47.0087 29.1539C47.4134 29.629 47.6346 30.2345 47.6319 30.8599C47.6319 30.9828 47.6209 31.1055 47.599 31.2264C48.4553 31.2697 49.2625 31.6419 49.8537 32.266C50.4449 32.8902 50.7751 33.7186 50.7761 34.5804C50.7794 35.4943 50.4415 36.3762 49.8293 37.052C49.217 37.7277 48.3748 38.1482 47.469 38.2302L45.1693 38.4469C43.8371 38.5721 42.4956 38.5602 41.1658 38.4112L39.9533 38.2754C39.7065 38.2478 39.4567 38.2728 39.2202 38.3488C38.9837 38.4248 38.7658 38.55 38.5808 38.7164C38.3957 38.8827 38.2476 39.0864 38.1462 39.3142C38.0448 39.542 37.9923 39.7886 37.9922 40.0382C37.9925 40.1921 38.0507 40.3403 38.1551 40.4529C38.2595 40.5656 38.4024 40.6345 38.5552 40.6457L39.2265 40.6936C39.9159 40.7443 40.5608 41.0548 41.0321 41.5629C41.5035 42.071 41.7666 42.7392 41.7687 43.4339C41.7681 44.0679 41.5172 44.6757 41.0711 45.1241C40.625 45.5724 40.0202 45.8245 39.3893 45.8252H36.7337C36.0264 45.825 35.321 45.7512 34.6288 45.6049L33.2248 45.3081C31.265 44.8931 29.2442 44.8612 27.2724 45.214L21.4924 46.2455C20.8402 46.3617 20.1791 46.4201 19.5166 46.4199Z"
					fill="#FCEA2B"
				/>
				<path
					d="M36.7339 44.9779H39.3894C39.7968 44.9779 40.1876 44.8153 40.4756 44.5258C40.7637 44.2362 40.9256 43.8436 40.9256 43.4341C40.9256 42.953 40.744 42.4897 40.4175 42.1377C40.0911 41.7857 39.644 41.5712 39.1664 41.5375L38.4964 41.4901C38.1307 41.4643 37.7884 41.3001 37.5384 41.0306C37.2885 40.7611 37.1495 40.4064 37.1495 40.038C37.1495 39.6693 37.2269 39.3047 37.3766 38.9681C37.5264 38.6315 37.7451 38.3305 38.0186 38.0847C38.292 37.8388 38.614 37.6538 38.9635 37.5415C39.3129 37.4293 39.6821 37.3925 40.0467 37.4334L41.2592 37.5694C42.5317 37.7121 43.8154 37.7235 45.0902 37.6034L47.3899 37.3866C48.0854 37.321 48.7316 36.9969 49.2019 36.4779C49.6722 35.9588 49.933 35.282 49.933 34.58C49.933 34.2503 49.8684 33.9239 49.7429 33.6193C49.6174 33.3147 49.4334 33.0379 49.2014 32.8048C48.9694 32.5717 48.6941 32.3867 48.391 32.2606C48.0879 32.1344 47.763 32.0694 47.435 32.0694H43.173"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
				<path
					d="M44.4338 32.0653H45.5902C45.9082 32.0652 46.2132 31.9383 46.438 31.7123C46.6629 31.4863 46.7892 31.1799 46.7892 30.8603C46.7892 30.4376 46.6389 30.0288 46.3654 29.7076C46.0919 29.3865 45.7132 29.1741 45.2976 29.1088L42.8736 28.7282C42.6587 28.6945 42.4537 28.6145 42.2726 28.4936C42.0914 28.3728 41.9385 28.214 41.8241 28.0281C41.7098 27.8422 41.6369 27.6337 41.6103 27.4169C41.5837 27.2 41.6041 26.9799 41.6701 26.7717L42.1391 25.2929C42.5792 24.0859 42.8504 22.8233 42.945 21.5413C43.5748 13.0493 36.4129 5.59048 26.9483 4.88148C17.4837 4.17248 10.3429 10.6257 8.67011 18.9736C8.31721 21.1673 8.57507 23.4163 9.41516 25.4717L9.54262 25.7638C9.70603 26.1383 9.7763 26.5472 9.74736 26.9551C9.71843 27.363 9.59116 27.7577 9.37654 28.1052C9.16193 28.4526 8.86641 28.7424 8.51548 28.9494C8.16456 29.1565 7.76878 29.2746 7.36228 29.2936L5.48281 29.3815C5.03348 29.4025 4.60949 29.5967 4.29895 29.9237C3.98841 30.2508 3.8152 30.6855 3.81532 31.1375C3.81543 31.4554 3.94117 31.7602 4.16488 31.985C4.38859 32.2098 4.69196 32.336 5.00828 32.3361H9.36079C9.69279 32.3032 10.0243 32.4029 10.2837 32.6137C10.5431 32.8246 10.7095 33.1295 10.7469 33.4627C10.7656 33.6248 10.7511 33.7891 10.7044 33.9454C10.6576 34.1017 10.5796 34.2468 10.4752 34.3718C10.3707 34.4967 10.2419 34.5989 10.0968 34.6722C9.9516 34.7454 9.7931 34.788 9.63096 34.7975L4.0681 34.6201C3.78334 34.6143 3.5003 34.6657 3.23554 34.7712C2.97079 34.8768 2.72964 35.0343 2.52622 35.2346C2.3228 35.435 2.16119 35.6741 2.05086 35.938C1.94053 36.2019 1.8837 36.4852 1.88369 36.7715V36.816C1.88269 37.0036 1.91858 37.1895 1.98928 37.3631C2.05998 37.5367 2.1641 37.6945 2.29566 37.8275C2.42723 37.9606 2.58365 38.0662 2.75594 38.1383C2.92823 38.2104 3.113 38.2476 3.29964 38.2478H15.5575C15.891 38.227 16.2194 38.3389 16.4715 38.5594C16.7237 38.7798 16.8794 39.0911 16.9051 39.426C16.9339 39.6012 16.9235 39.7807 16.8747 39.9514C16.8259 40.1222 16.7399 40.2798 16.6229 40.413C16.5059 40.5461 16.3609 40.6514 16.1983 40.7212C16.0358 40.791 15.8599 40.8236 15.6832 40.8165L9.582 41.0508C9.18101 41.0649 8.80114 41.2349 8.52244 41.525C8.24374 41.8151 8.08798 42.2026 8.088 42.6058C8.088 42.8022 8.12817 42.9965 8.20601 43.1767C8.28385 43.3569 8.3977 43.5191 8.5405 43.6532C8.6833 43.7873 8.852 43.8905 9.03614 43.9564C9.22027 44.0222 9.41591 44.0494 9.61091 44.0361L9.97173 44.0115C11.8237 43.8853 13.6818 44.1412 15.4317 44.7633L16.0171 44.9712C17.7255 45.5785 19.5614 45.7305 21.3456 45.4123L27.1255 44.3807C29.2033 44.0101 31.3325 44.0437 33.3977 44.4799"
					stroke="black"
					strokeWidth="2"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
				<path
					d="M23.3268 16.8293C23.3268 17.3582 23.1707 17.8752 22.8783 18.315C22.586 18.7547 22.1704 19.0975 21.6842 19.2999C21.198 19.5023 20.6629 19.5552 20.1468 19.4521C19.6306 19.3489 19.1565 19.0942 18.7844 18.7202C18.4122 18.3462 18.1588 17.8697 18.0561 17.351C17.9535 16.8323 18.0062 16.2946 18.2076 15.806C18.409 15.3173 18.75 14.8997 19.1876 14.6059C19.6252 14.312 20.1396 14.1552 20.6659 14.1552C21.3715 14.1554 22.0482 14.4373 22.5471 14.9387C23.0461 15.4401 23.3265 16.1202 23.3268 16.8293Z"
					fill="black"
				/>
				<path
					d="M33.9703 21.4604C33.9703 21.9893 33.8143 22.5063 33.5219 22.946C33.2295 23.3858 32.8139 23.7285 32.3277 23.9309C31.8415 24.1333 31.3065 24.1863 30.7903 24.0831C30.2742 23.9799 29.8 23.7253 29.4279 23.3513C29.0558 22.9773 28.8024 22.5008 28.6997 21.9821C28.597 21.4633 28.6497 20.9257 28.8511 20.437C29.0525 19.9484 29.3936 19.5308 29.8311 19.2369C30.2687 18.9431 30.7832 18.7862 31.3095 18.7862C32.0151 18.7865 32.6917 19.0683 33.1907 19.5698C33.6897 20.0712 33.9701 20.7512 33.9703 21.4604Z"
					fill="black"
				/>
				<path
					d="M22.3388 27.8858C23.5257 29.2159 25.0556 30.1902 26.7591 30.701C28.4627 31.2118 30.2736 31.2392 31.9917 30.7803"
					stroke="black"
					strokeWidth="1.928"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
			</svg>
		</div>,
		{
			...size,
		},
	)
}
