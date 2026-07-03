(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"xrPanelsEnabled":true,"start":"this.init()","id":"rootPlayer","class":"Player","data":{"locales":{"es":"locale/es.txt"},"history":{},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnInfoWindow":false},"defaultLocale":"es","name":"Player16095","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"propagateClick":false,"layout":"absolute","scripts":{"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowScore":TDV.Tour.Script.quizShowScore,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"clone":TDV.Tour.Script.clone,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"setValue":TDV.Tour.Script.setValue,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPixels":TDV.Tour.Script.getPixels,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"mixObject":TDV.Tour.Script.mixObject,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"unloadViewer":TDV.Tour.Script.unloadViewer,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"downloadFile":TDV.Tour.Script.downloadFile,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"historyGoForward":TDV.Tour.Script.historyGoForward,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"textToSpeech":TDV.Tour.Script.textToSpeech,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getKey":TDV.Tour.Script.getKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"disableVR":TDV.Tour.Script.disableVR,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"enableVR":TDV.Tour.Script.enableVR,"toggleVR":TDV.Tour.Script.toggleVR,"getOverlays":TDV.Tour.Script.getOverlays,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"createTween":TDV.Tour.Script.createTween,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showWindow":TDV.Tour.Script.showWindow,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeJS":TDV.Tour.Script.executeJS,"showWindowBase":TDV.Tour.Script.showWindowBase,"registerKey":TDV.Tour.Script.registerKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"existsKey":TDV.Tour.Script.existsKey,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"translate":TDV.Tour.Script.translate,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setLocale":TDV.Tour.Script.setLocale,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem},"hash": "fc679a58bf22d3fc5e53c8a65f9edfb58e653fc724927b8eaa59fd8ae7b1a38b", "definitions": [{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"hfovMax":130,"class":"Panorama","id":"panorama_39FECC6F_24E2_8947_41A6_5D386EB01064","overlays":["this.overlay_3F2539BF_24E2_8BC7_41BD_78D49E455E63"],"thumbnailUrl":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_t.webp","frames":[{"cube":{"levels":[{"rowCount":10,"height":5120,"url":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_0/{face}/0/{row}_{column}.webp","colCount":60,"tags":"ondemand","width":30720,"class":"TiledImageResourceLevel"},{"rowCount":5,"height":2560,"url":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_0/{face}/1/{row}_{column}.webp","colCount":30,"tags":"ondemand","width":15360,"class":"TiledImageResourceLevel"},{"rowCount":3,"height":1536,"url":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_0/{face}/2/{row}_{column}.webp","colCount":18,"tags":"ondemand","width":9216,"class":"TiledImageResourceLevel"},{"rowCount":2,"height":1024,"url":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_0/{face}/3/{row}_{column}.webp","colCount":12,"tags":"ondemand","width":6144,"class":"TiledImageResourceLevel"},{"rowCount":1,"height":512,"url":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_0/{face}/4/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_t.webp","class":"CubicPanoramaFrame"}],"data":{"label":"ASSTURIAS"},"hfov":360,"vfov":180,"label":trans('panorama_39FECC6F_24E2_8947_41A6_5D386EB01064.label')},{"playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTop":0,"progressHeight":2,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"progressBarBorderRadius":2,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"toolTipPaddingRight":6,"subtitlesBottom":50,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":"33%","toolTipFontColor":"#606060","playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowColor":"#000000","playbackBarBottom":5,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","vrThumbstickRotationStep":20,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"id":"MainViewer","toolTipFontSize":"1.11vmin","class":"ViewerArea","playbackBarProgressBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","vrPointerSelectionTime":2000,"propagateClick":false,"playbackBarBorderSize":0,"toolTipPaddingTop":4,"firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","minHeight":50,"minWidth":100,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"progressBarBorderColor":"#000000","width":"100%","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","subtitlesTextShadowVerticalLength":1,"height":"100%","playbackBarHeadBorderSize":0},{"initialSequence":"this.sequence_3FFE5A11_24E2_88DB_41BD_90A126F572F2","id":"panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_camera","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"class":"PanoramaCamera"},{"id":"mainPlayList","items":[{"camera":"this.panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_camera","media":"this.panorama_39FECC6F_24E2_8947_41A6_5D386EB01064","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"enabledInVR":true,"items":[{"pitch":-58.4,"distance":50,"yaw":-75.02,"data":{"label":"PRUEBA"},"class":"HotspotPanoramaOverlayImage","hfov":12.32,"image":{"levels":[{"height":511,"url":"media/panorama_39FECC6F_24E2_8947_41A6_5D386EB01064_HS_v0sjq5nf.webp","width":533,"class":"ImageResourceLevel"}],"class":"ImageResource"},"vfov":11.81}],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"PRUEBA"},"useHandCursor":true,"id":"overlay_3F2539BF_24E2_8BC7_41BD_78D49E455E63","areas":["this.HotspotPanoramaOverlayArea_3F20C9CE_24E2_8B49_41B1_A17AEC2D5009"]},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_3FFE5A11_24E2_88DB_41BD_90A126F572F2","class":"PanoramaCameraSequence"},{"id":"HotspotPanoramaOverlayArea_3F20C9CE_24E2_8B49_41B1_A17AEC2D5009","mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea"}],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","minWidth":0,"gap":10,"height":"100%","children":["this.MainViewer"],"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Thu Jul 2 2026