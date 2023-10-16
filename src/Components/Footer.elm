module Components.Footer exposing (footerSection)

import Html exposing (Html, footer, div, p, span, a, text)
import Html.Attributes exposing (class, href, target)
import Models exposing (Msg)


footerSection : Html Msg
footerSection =
    footer [ class "bg-gray-50 dark:bg-zinc-800 py-16 border-t dark:border-gray-600" ]
        [ div [ class "container px-10 mx-auto max-w-screen-lg text-gray-500 dark:text-gray-100" ]
            [ div [ class "flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 justify-between" ] 
                [ p [ class "text-sm font-extralight" ] [ text "Copyright © 2023 Timo Zacherl. All rights reserved." ] 
                , p [ class "text-sm font-extralight" ] [ 
                    text "Built with ", span [ class "text-red-500" ] [ text "♥" ], text " and ", a [ href "https://elm-lang.org", target "_blank" ] [ text "Elm" ], text "."
                 ]
                ]
            ]
        ]