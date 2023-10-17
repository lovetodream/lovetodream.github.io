module Models exposing (..)

import Svg exposing (Svg, svg, defs, radialGradient, linearGradient, stop)
import Svg.Attributes exposing (viewBox, fill, fillRule, clipRule, d, width, height, stopColor, offset, x1, x2, y1, y2, cx, cy, r, gradientUnits, gradientTransform)


type alias Image =
    String


type alias Link =
    String


type alias Project =
    { name : String
    , description : String
    , image : Image
    , link : Link
    , linkLabel : String
    , projectClass: String
    , linkClass: String
    , withShadow: Bool
    }
    

type alias Social =
    { name : String
    , link : Link
    , icon : Svg Msg
    , linkClass : String
    }


type Msg
    = NewProject Project 
    | NewSocial Social


type alias Model =
    { projects : List Project, socials: List Social }


githubIcon : Svg msg
githubIcon = svg
    [ viewBox "0 0 496 512"
    , Svg.Attributes.class "w-8 h-8"
    ]
    [ Svg.path
        [ fill "currentColor"
        , fillRule "evenodd"
        , d "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" 
        ] []
    ]


mailIcon : Svg msg
mailIcon = svg 
    [ viewBox "0 0 512 512"
    , Svg.Attributes.class "text-blue-500 w-8 h-8" 
    ] 
    [ Svg.path
        [ fill "currentColor"
        , fillRule "evenodd"
        , d "M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
        ] []
    ]


swiftIcon : Svg msg
swiftIcon = svg 
    [ viewBox "0 0 448 512"
    , Svg.Attributes.class "inline-block h-8 mb-1"
    ]
    [ Svg.path 
        [ fill "currentColor"
        , fillRule "evenodd"
        , d "M448 156.09c0-4.51-.08-9-.2-13.52a196.31 196.31 0 0 0-2.58-29.42 99.62 99.62 0 0 0-9.22-28A94.08 94.08 0 0 0 394.84 44a99.17 99.17 0 0 0-28-9.22 195 195 0 0 0-29.43-2.59c-4.51-.12-9-.17-13.52-.2H124.14c-4.51 0-9 .08-13.52.2-2.45.07-4.91.15-7.37.27a171.68 171.68 0 0 0-22.06 2.32 103.06 103.06 0 0 0-21.21 6.1q-3.46 1.45-6.81 3.12a94.66 94.66 0 0 0-18.39 12.32c-1.88 1.61-3.69 3.28-5.43 5A93.86 93.86 0 0 0 12 85.17a99.45 99.45 0 0 0-9.22 28 196.31 196.31 0 0 0-2.54 29.4c-.13 4.51-.18 9-.21 13.52v199.83c0 4.51.08 9 .21 13.51a196.08 196.08 0 0 0 2.58 29.42 99.3 99.3 0 0 0 9.22 28A94.31 94.31 0 0 0 53.17 468a99.47 99.47 0 0 0 28 9.21 195 195 0 0 0 29.43 2.59c4.5.12 9 .17 13.52.2H323.91c4.51 0 9-.08 13.52-.2a196.59 196.59 0 0 0 29.44-2.59 99.57 99.57 0 0 0 28-9.21A94.22 94.22 0 0 0 436 426.84a99.3 99.3 0 0 0 9.22-28 194.79 194.79 0 0 0 2.59-29.42c.12-4.5.17-9 .2-13.51V172.14c-.01-5.35-.01-10.7-.01-16.05zm-69.88 241c-20-38.93-57.23-29.27-76.31-19.47-1.72 1-3.48 2-5.25 3l-.42.25c-39.5 21-92.53 22.54-145.85-.38A234.64 234.64 0 0 1 45 290.12a230.63 230.63 0 0 0 39.17 23.37c56.36 26.4 113 24.49 153 0-57-43.85-104.6-101-141.09-147.22a197.09 197.09 0 0 1-18.78-25.9c43.7 40 112.7 90.22 137.48 104.12-52.57-55.49-98.89-123.94-96.72-121.74 82.79 83.42 159.18 130.59 159.18 130.59 2.88 1.58 5 2.85 6.73 4a127.44 127.44 0 0 0 4.16-12.47c13.22-48.33-1.66-103.58-35.31-149.2C329.61 141.75 375 229.34 356.4 303.42c-.44 1.73-.95 3.4-1.44 5.09 38.52 47.4 28.04 98.17 23.13 88.59z"
        ] []
    ]


protonIcon : Svg msg 
protonIcon = svg 
    [ width "106"
    , height "86"
    , viewBox "0 0 106 86"
    , fill "none"
    , Svg.Attributes.class "inline-block w-8"
    ]
    [ Svg.path [ fill "url(#paint0_linear_11985_190892)", fillRule "evenodd", clipRule "evenodd", d "M83.4613 16.1551V86H95.0393C101.094 86 106 81.026 106 74.9015V2.47101C106 0.378398 103.596 -0.761032 102.003 0.575608L83.4613 16.1551Z" ] []
    , Svg.path [ fill "url(#paint1_linear_11985_190892)", fillRule "evenodd", clipRule "evenodd", d "M67.3128 29.7407L46.1604 48.6618C42.5538 51.8829 37.1709 51.9596 33.4777 48.848L0 20.6691V2.482C0 0.38939 2.40441 -0.760996 3.99653 0.575643L45.998 35.8761C50.0595 39.2944 55.9514 39.2944 60.0129 35.8761L67.3128 29.7407Z" ] []
    , Svg.path [ fill "url(#paint2_radial_11985_190892)", d "M83.4613 16.1661L67.3128 29.7407L67.3236 29.7406L46.1604 48.6618C42.5538 51.8829 37.1709 51.9596 33.4777 48.848L0 20.6691V74.9015C0 81.0259 4.9063 86 10.9607 86L83.4613 86V16.1661Z" ] []
    , defs [] 
        [ linearGradient [ Svg.Attributes.id "paint0_linear_11985_190892", x1 "265.975", y1 "141.754", x2 "244.3", y2 "-73.4041", gradientUnits "userSpaceOnUse" ] 
            [ stop [ offset "0.271", stopColor "#E3D9FF" ] []
            , stop [ offset "1", stopColor "#7341FF" ] []
            ]
        , linearGradient [ Svg.Attributes.id "paint1_linear_11985_190892", x1 "62.6346", y1 "86.7984", x2 "18.553", y2 "-87.2799", gradientUnits "userSpaceOnUse" ]
            [ stop [ stopColor "#E3D9FF" ] []
            , stop [ offset "1", stopColor "#7341FF" ] []
            ]
        , radialGradient [ Svg.Attributes.id "paint2_radial_11985_190892", cx "0", cy "0", r "1", gradientUnits "userSpaceOnUse", gradientTransform "translate(105.538 10.5272) scale(123.614 125.045)" ]
            [ stop [ offset "0.5561", stopColor "#6D4AFF" ] []
            , stop [ offset "0.9944", stopColor "#AA8EFF" ] []
            ]
        ]
    ]


listSocials : List Social
listSocials =
    [ Social "GitHub" "https://github.com/lovetodream" githubIcon "ring-1 ring-gray-200 hover:bg-gray-50 dark:ring-gray-700 dark:bg-gray-800 dark:bg-opacity-30 dark:hover:bg-gray-800 dark:hover:bg-opacity-60"
    , Social "Mail" "mailto:timo@swiftbytimo.com" mailIcon "ring-1 ring-blue-200 hover:bg-blue-50 dark:ring-blue-800 dark:ring-opacity-60 dark:bg-blue-800 dark:bg-opacity-10 dark:hover:bg-blue-800 dark:hover:bg-opacity-20"
    , Social "SecureMail" "mailto:t.zacherl@proton.me" protonIcon "ring-1 ring-purple-200 hover:bg-purple-50 dark:ring-purple-800 dark:ring-opacity-60 dark:bg-purple-800 dark:bg-opacity-10 dark:hover:bg-purple-800 dark:hover:bg-opacity-20"
    ]


listProjects : List Project
listProjects =
    [ --Project "JOCR Academy (DE)" "Coming soon" "public/assets/img/jocr-academy.svg" "https://jocr.academy" "Website" "hover:bg-gray-400 hover:bg-opacity-[0.1]" "text-gray-400 transition-opacity" False
      Project "JOCR App (DE)" "An iOS App for the JOCR Community" "public/assets/img/jocr.webp" "https://apps.apple.com/de/app/jocr/id1542752641" "App Store" "hover:bg-blue-600 hover:bg-opacity-[0.05]" "text-blue-600 transition-opacity" True
    , Project "Abonementi" "Keep track of your ongoing subscriptions" "public/assets/img/abonementi.png" "https://apps.apple.com/us/app/abonementi/id1604089032" "App Store" "hover:bg-blue-400 hover:bg-opacity-[0.05]" "text-blue-400 transition-opacity" True
    , Project "Gitimoji" "A Gitmoji App for macOS" "public/assets/img/gitimoji.png" "https://github.com/lovetodream/gitimoji/releases/latest" "GitHub" "hover:bg-yellow-400 hover:bg-opacity-[0.05]" "text-yellow-400 transition-opacity" True
    ]



initialModel : Model
initialModel =
    { projects = listProjects, socials = listSocials }


init : () -> ( Model, Cmd Msg )
init _ =
    ( initialModel, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NewProject project ->
            ( { model | projects = project :: model.projects }, Cmd.none )
        NewSocial social ->
            ( { model | socials = social :: model.socials }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none