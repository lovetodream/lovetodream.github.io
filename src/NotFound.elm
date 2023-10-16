module NotFound exposing (..)

import Browser
import Html exposing (Html, div, main_, section, h1, h2, p, a, text)
import Html.Attributes exposing (class, href)
import Components.Footer exposing (footerSection)
import Models exposing (Msg, Model, init, update, subscriptions)
import Main exposing (socialsSection)

main : Program () Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


view : Model -> Browser.Document Msg
view model =
    { title = "Timo Zacherl - Not Found"
    , body = [ page model ]
    }



page : Model -> Html Msg
page model =
    -- general website layout
    div [ class "min-h-screen flex flex-col justify-between text-gray-800 dark:bg-stone-900 dark:text-gray-200" ]
        [ notFoundSection model
        , footerSection
        ]


notFoundSection : Model -> Html Msg
notFoundSection model = 
    let
        linkClass =
            "text-blue-500 border-b border-transparent hover:text-blue-400 hover:border-current transition-colors"
    in
        main_ [ class "flex justify-center items-center flex-1 text-center" ] 
            [ section [ class "space-y-4 max-w-sm font-light" ] 
                [ h1 [ class "text-3xl font-bold tracking-wider" ] [ text "404" ]
                , div [ class "space-y-1" ] 
                    [ h2 [ class "text-xl tracking-wide font-medium" ] [ text "This page doesn't exist" ]
                    , p [ class "text-sm text-slate-400 tracking-wide" ] [ text "(perhaps it never really did?)" ]
                    ]
                , p [ ] 
                    [ text "If you're seeing this page, could you "
                    , a [ href "mailto:timo@swiftbytimo.com", class linkClass ] [ text "message me" ]
                    , text " and let me know where you were linked from?" 
                    ]
                , p [ ]
                    [ text "Otherwise you can head to the "
                    , a [ href "/", class linkClass ] [ text "homepage" ]
                    , text ", which I (almost certainly) promise won't 404." 
                    ]
                , div [ class "w-full flex justify-center pt-4" ] [ socialsSection model ]
                ]
            ]