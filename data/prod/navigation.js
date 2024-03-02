{
    "INCLUSIVETEST": {
        "start": "InclusiveTest",
        "speechCapable": true,
        "InclusiveTest": {
            "cxid": "InclusiveTest",
            "url": "ms-appx-web:///views/inclusiveTest.html",
            "visibility": false,
            "cancelID": "Local",
            "successID": "TemplateInstances"
        },
        "Local": {
            "cxid": "Local",
            "url": "ms-appx-web:///views/localAccount.html",
            "visibility": false
        },
        "TemplateInstances": {
            "cxid": "TemplateInstances",
            "url": "ms-appx-web:///views/templateInstances.html"
        }
    },
    "TEST": {
        "start": "Test",
        "Test": {
            "cxid": "Test",
            "url": "ms-appx-web:///views/test.html",
            "visibility": false,
            "timeout": 5000,
            "backID": "Bing",
            "cancelID": "Local",
            "successID": "Test"
        },
        "Bing": {
            "cxid": "Bing",
            "url": "https://www.bing.com",
            "visibility": true,
            "initialize": {
                "getData": "CloudExperienceHost.getContext",
                "key": "cxh-init"
            }
        },
        "Local": {
            "cxid": "Local",
            "url": "ms-appx-web:///views/localAccount.html",
            "visibility": false
        }
    },
    "LITETEST": {
        "start": "OobeLanguage",
        "speechCapable": true,
        "speechDisabled": true,
        "introVideoPath": "../media/oobe-intro.mp4",
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "narratorInstruction": true,
        "useBackstackForBackNavigation": true,
        "LightTest": {
            "cxid": "LightTest",
            "frameAnimation": "languageLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/lightTest.html",
            "successID": "OobeRegion",
            "failID": "OobeRegion",
            "cancelID": "OobeRegion",
            "abortID": "OobeRegion",
            "visibility": false,
            "disableBackNavigationToNodeOnSuccess": true,
            "allowDisplayModeChange": true
        },
        "OobeZdp": {
            "cxid": "OobeZdp",
            "frameAnimation": "zdpLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeZdp-main.html",
            "internetRequired": true,
            "successID": "OobeRegion",
            "failID": "OobeRegion",
            "cancelID": "OobeRegion",
            "offlineID": "OobeRegion",
            "abortID": "OobeRegion",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "OobeNetworkLossAversion": {
            "cxid": "OobeNetworkLossAversion",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeNetworkLossAversion-main.html",
            "successID": "OobeRegion",
            "failID": "OobeRegion",
            "cancelID": "OobeRegion",
            "abortID": "OobeRegion",
            "action1ID": "OobeWirelessDesktop",
            "visibility": false
        },
        "OobeLanguage": {
            "cxid": "OobeLanguage",
            "frameAnimation": "languageLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeLanguage-main.html",
            "successID": "OobeRegion",
            "failID": "OobeRegion",
            "cancelID": "OobeRegion",
            "abortID": "OobeRegion",
            "visibility": false,
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeRegion": {
            "cxid": "OobeRegion",
            "frameAnimation": "regionLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeRegion-main.html",
            "successID": "OobeKeyboard",
            "failID": "OobeKeyboard",
            "cancelID": "OobeKeyboard",
            "abortID": "OobeKeyboard",
            "visibility": false
        },
        "OobeKeyboard": {
            "cxid": "OobeKeyboard",
            "frameAnimation": "keyboardLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeKeyboard-main.html",
            "successID": "OobeEula",
            "failID": "OobeEula",
            "cancelID": "OobeEula",
            "abortID": "OobeEula",
            "visibility": false
        },
        "OobeWireless": {
            "cxid": "OobeWireless",
            "frameAnimation": "wifiLottie.json",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsWcosDefaults",
            "launcher": "js:HostedApplication",
            "hostedApplicationProtocol": "ms-oobenetwork:",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "OobeEula",
            "failID": "OobeEula",
            "cancelID": "OobeEula",
            "action1ID": "OobeCaptivePortal",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeWirelessDesktop": {
            "cxid": "OobeWirelessDesktop",
            "frameAnimation": "wifiLottie.json",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktop",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "AutopilotActivation",
            "failID": "AutopilotActivation",
            "cancelID": "OobeNetworkLossAversion",
            "action1ID": "OobeCaptivePortal",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeEula": {
            "cxid": "OobeEula",
            "frameAnimation": "eulaLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeeula-main.html",
            "successID": "OobeDeviceName",
            "failID": "OobeDeviceName",
            "cancelID": "OobeDeviceName",
            "abortID": "OobeDeviceName",
            "visibility": false
        },
        "OobeDeviceName": {
            "cxid": "OobeDeviceName",
            "url": "https://sdx.microsoft.com/frx/device-naming",
            "urlint": "https://sdx.microsoft-int.com/frx/device-naming",
            "internetRequired": true,
            "successID": "OobeNDUP",
            "failID": "OobeNDUP",
            "cancelID": "OobeNDUP",
            "abortID": "OobeNDUP",
            "offlineID": "OobeNDUP"
        },
        "OobeNDUP": {
            "cxid": "OobeNDUP",
            "url": "https://sdx.microsoft.com/frx/cloud-ndup",
            "urlint": "https://sdx.microsoft-int.com/frx/cloud-ndup",
            "successID": "OobeSettings",
            "failID": "OobeSettings",
            "cancelID": "OobeSettings",
            "abortID": "OobeSettings",
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "allowDisplayModeChange": true
        },
        "OobeOemRegistration": {
            "cxid": "OobeOemRegistration",
            "frameAnimation": "oemRegistrationLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OEMRegistrationStatics",
            "preloadCheckSkipOnFailure": true,
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeOemRegistration-main.html",
            "ignoreResult": true,
            "successID": "OobeSettings",
            "failID": "OobeSettings",
            "cancelID": "OobeSettings",
            "abortID": "OobeSettings",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "OobeSettings": {
            "cxid": "OobeSettings",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-main.html",
            "successID": "OobeSettingsMultiPage",
            "failID": "OobeSettingsMultiPage",
            "cancelID": "OobeSettingsMultiPage",
            "abortID": "OobeSettingsMultiPage",
            "visibility": false
        },
        "OobeSettingsMultiPage": {
            "cxid": "OobeSettingsMultiPage",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-multipage-main.html",
            "successID": "OobeSettingsAadc",
            "failID": "OobeSettingsAadc",
            "cancelID": "OobeSettingsAadc",
            "abortID": "OobeSettingsAadc",
            "visibility": false
        },
        "OobeSettingsAadc": {
            "cxid": "OobeSettingsAadc",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-aadc-main.html",
            "canExitCxh": true,
            "visibility": false
        },
        "OobeIDPS": {
            "cxid": "OobeIDPS",
            "url": "https://account.live.com/disambiguationpage",
            "urlint": "https://account.live-int.com/disambiguationpage",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "internetRequired": true,
            "ignoreResult": true,
            "visibility": false
        },
        "OobeMSA": {
            "cxid": "OobeMSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "successID": "OobeLocal",
            "failID": "OobeLocal",
            "cancelID": "OobeIDPS",
            "disableBackNavigationToNode": true,
            "abortID": "OobeLocal"
        },
        "OobeMSAHello": {
            "cxid": "OobeMSAHello",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeHello-main.html",
            "ignoreResult": true,
            "timeout": 60000,
            "internetRequired": true,
            "checkpointOnSuccess": true,
            "successID": "OobeSettings",
            "failID": "OobeSettings",
            "cancelID": "OobeSettings",
            "abortID": "OobeSettings",
            "visibility": false,
            "disableBackNavigationToNodeOnSuccess": true,
            "canExitCxh": true
        },
        "OobeMSANGCEnrollWithHello": {
            "cxid": "OobeMSANGCEnrollWithHello",
            "frameAnimation": "lockandpinLottie.json",
            "url": "https://account.live.com/msangc?fl=enroll&hello=1",
            "urlint": "https://account.live-int.com/msangc?fl=enroll&hello=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "ignoreResult": true,
            "successID": "OobeSettings",
            "failID": "OobeSettings",
            "cancelID": "OobeSettings",
            "abortID": "OobeSettings",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeLocal": {
            "cxid": "OobeLocal",
            "frameAnimation": "localaccountLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeLocalAccount-main.html",
            "disableBackNavigationToNodeOnSuccess": true,
            "successID": "OobeLocalHello",
            "visibility": false
        },
        "OobeLocalNGC": {
            "cxid": "OobeLocalNGC",
            "frameAnimation": "lockandpinLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeLocalNGC-main.html",
            "ignoreResult": true,
            "successID": "OobePreSettingsExperimentation",
            "failID": "OobePreSettingsExperimentation",
            "cancelID": "OobePreSettingsExperimentation",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeError": {
            "cxid": "OobeError",
            "frameAnimation": "errorLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        }
    },
    "LOCALONLY": {
        "start": "Local",
        "notifyOnLastFinished": true,
        "Local": {
            "cxid": "Local",
            "url": "ms-appx-web:///views/localAccount.html",
            "successID": "OemRegistration",
            "visibility": false
        },
        "OemRegistration": {
            "cxid": "OemRegistration",
            "url": "ms-appx-web:///views/OEMRegistration.html",
            "visibility": false
        }
    },
  "FRXAAD": {
    "start": "AAD",
    "notifyOnFirstVisible": true,
    "notifyOnLastFinished": true,
    "AAD": {
      "cxid": "AAD",
      "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
      "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
      "showAccountErrorPageOnFailure": true,
      "initialize": {
        "getData": "CloudExperienceHost.getAllowedIdentityProviders",
        "key": "cxh-idps"
      },
      "abortID": "Local",
      "cancelID": "Local",
      "failID": "Local"
    },
    "Local": {
      "cxid": "Local",
      "url": "ms-appx-web:///views/localAccount.html",
      "backID": "AAD",
      "visibility": false
    }
  },
  "MOSETAAD": {
    "start": "AAD",
    "AAD": {
      "cxid": "AAD",
      "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
      "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
      "showErrorPageOnFailure": true
    }
  },
  "NTHAADRECOVERY": {
    "start": "AAD",
    "AAD": {
      "cxid": "AAD",
      "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
      "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
      "showErrorPageOnFailure": true
    }
  },
    "MOSETMSALOCAL": {
        "start": "MSA",
        "MSA": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80601",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80601",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "successID": "MSAHello",
            "showErrorPageOnFailure": true
        },
        "MSAHello": {
            "cxid": "MSAHello",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "MSANGCEnrollWithHello",
            "failID": "MSANGCEnroll",
            "cancelID": "MSANGCEnroll",
            "abortID": "MSANGCEnroll",
            "visibility": false
        },
        "MSANGCEnrollWithHello": {
            "cxid": "MSANGCEnrollWithHello",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll&hello=1",
            "urlint": "https://account.live-int.com/msangc?fl=enroll&hello=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "offlineID": "OfflineWithHello",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OfflineWithHello": {
            "cxid": "OfflineWithHello",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSANGCEnrollWithHello"
        },
        "MSANGCEnroll": {
            "cxid": "MSANGCEnroll",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll",
            "urlint": "https://account.live-int.com/msangc?fl=enroll",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSANGCEnroll"
        }
    },
    "MOSETMSA": {
        "start": "RDP",
        "RDP": {
            "cxid": "RDP",
            "url": "ms-appx-web:///views/roamingDisambiguation.html",
            "successID": "MSA",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MSA": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80601",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80601",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "showErrorPageOnFailure": true
        }
    },
    "SCOOBEMSA": {
        "start": "MSA",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "frameStyleHeight": "80%",
        "frameStyleWidth": "80%",
        "frameStyleMargin": "5% 10% 10% 10%",
        "speechCapable": true,
        "speechDisabled": true,
        "MSA": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "showErrorPageOnFailure": true,
            "internetRequired": true,
            "offlineID": "OfflinePage"
        },
        "OfflinePage": {
            "cxid": "OfflinePage",
            "url": "ms-appx-web:///views/nointernet.html",
            "nodeCapabilities": {"Personality": "CloudExperienceHost.Personality.Unspecified"},
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSA"
        }
    },
    "SCOOBEMSAWASC": {
        "start": "MSA",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "frameStyleHeight": "90%",
        "frameStyleWidth": "90%",
        "frameStyleMargin": "5%",
        "speechCapable": true,
        "speechDisabled": true,
        "MSA": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "showErrorPageOnFailure": true,
            "internetRequired": true,
            "successID": "WASC",
            "offlineID": "MSAOfflinePage"
        },
        "WASC": {
            "cxid": "WASC",
            "url": "https://sdx.microsoft.com/frx/windows-account-sync-consent/jit-msa-attach",
            "urlint": "https://sdx.microsoft-int.com/frx/windows-account-sync-consent/jit-msa-attach",
            "disableBackNavigationFromNode": true,
            "showErrorPageOnFailure": true,
            "internetRequired": true,
            "offlineID": "WASCOfflinePage"
        },
        "MSAOfflinePage": {
            "cxid": "MSAOfflinePage",
            "url": "ms-appx-web:///views/nointernet.html",
            "nodeCapabilities": {"Personality": "CloudExperienceHost.Personality.Unspecified"},
            "visibility": false,
            "successID": "MSA"
        },
        "WASCOfflinePage": {
            "cxid": "WASCOfflinePage",
            "url": "ms-appx-web:///views/nointernet.html",
            "nodeCapabilities": {"Personality": "CloudExperienceHost.Personality.Unspecified"},
            "visibility": false,
            "successID": "WASC"
        }
    },
    "WASC": {
        "start": "WASC",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "speechCapable": true,
        "speechDisabled": true,
        "WASC": {
            "cxid": "WASC",
            "url": "https://sdx.microsoft.com/frx/windows-account-sync-consent/jit",
            "urlint": "https://sdx.microsoft-int.com/frx/windows-account-sync-consent/jit",
            "disableBackNavigationFromNode": true,
            "showErrorPageOnFailure": true,
            "internetRequired": true,
            "offlineID": "OfflinePage"
        },
        "OfflinePage": {
            "cxid": "OfflinePage",
            "url": "ms-appx-web:///views/nointernet.html",
            "nodeCapabilities": {"Personality": "CloudExperienceHost.Personality.Unspecified"},
            "visibility": false,
            "successID": "WASC"
        }
    },
    "MOSETAADLOCAL": {
        "start": "ConnectAADAccount",
        "ConnectAADAccount": {
            "cxid": "ConnectAADAccount",
            "url": "https://login.microsoftonline.com/webapp/ConnectAADAccount/1",
            "urlint": "https://login.windows-ppe.net/webApp/ConnectAADAccount/1",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "internetRequired": true,
            "offlineID": "OfflinePage"
        },
        "OfflinePage": {
            "cxid": "OfflinePage",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "ConnectAADAccount"
        }
    },
  "MOSETCONNECTTOWORK": {
    "start": "Work",
    "Work": {
      "cxid": "Work",
      "url": "https://login.microsoftonline.com/webapp/UnifiedEnrollment/4",
      "urlint": "https://login.windows-ppe.net/webapp/UnifiedEnrollment/4",
      "showErrorPageOnFailure": true,
      "visibility": false,
      "offlineID": "offlinePage",
      "action1ID": "MDM",
      "action2ID": "AAD"
    },
    "offlinePage": {
      "cxid": "offlinePage",
      "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollment.html",
      "successID": "MDM",
      "visibility": false,
      "showErrorPageOnFailure": true
    },
    "MDM": {
      "cxid": "MDM",
      "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentDiscovery.html",
      "failID": "Work",
      "successID": "MDMEnrollmentFinished",
      "action1ID": "MDMOnPremEnrollment",
      "action2ID": "MDMDiscoveryError",
      "visibility": false,
      "showErrorPageOnFailure": true
    },
    "MDMDiscoveryError": {
      "cxid": "MDMDiscoveryError",
      "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentDiscoveryError.html",
      "failID": "MDM",
      "successID": "Discovery",
      "visibility": false,
      "showErrorPageOnFailure": true
    },
    "AAD": {
      "cxid": "AAD",
      "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
      "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
      "showErrorPageOnFailure": true,
      "cancelID": "Work"
    },
    "MDMOnPremEnrollment": {
      "cxid": "MDMOnPremEnrollment",
      "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentOnPremAuth.html",
      "failID": "MDMEnrollmentFinished",
      "successID": "MDMEnrollmentFinished",
      "visibility": false,
      "showErrorPageOnFailure": true
    },
    "MDMEnrollmentFinished": {
      "cxid": "MDMEnrollmentFinished",
      "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentFinished.html",
      "visibility": false,
      "showErrorPageOnFailure": true
    }
  },
    "MOSETMDMCONNECTTOWORK": {
        "start": "Work",
        "Work": {
            "cxid": "Work",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollment.html",
            "successID": "Discovery",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "Discovery": {
            "cxid": "Discovery",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentDiscovery.html",
            "failID": "Work",
            "successID": "MDMEnrollmentFinished",
            "action1ID": "MDMOnPremEnrollment",
            "action2ID": "MDMDiscoveryError",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MDMDiscoveryError": {
            "cxid": "MDMDiscoveryError",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentDiscoveryError.html",
            "failID": "Work",
            "successID": "Discovery",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MDMOnPremEnrollment": {
            "cxid": "MDMOnPremEnrollment",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentOnPremAuth.html",
            "failID": "MDMEnrollmentFinished",
            "successID": "MDMEnrollmentFinished",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MDMEnrollmentFinished": {
            "cxid": "MDMEnrollmentFinished",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentFinished.html",
            "visibility": false,
            "showErrorPageOnFailure": true
        }
    },
    "MOSETMAMCONNECTTOWORK": {
        "start": "Work",
        "Work": {
            "cxid": "Work",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollment.html",
            "successID": "Discovery",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "Discovery": {
            "cxid": "Discovery",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentDiscovery.html",
            "failID": "MDMEnrollmentFinished",
            "successID": "MDMEnrollmentFinished",
            "action1ID": "MDMOnPremEnrollment",
            "action2ID": "MDMDiscoveryError",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MDMDiscoveryError": {
            "cxid": "MDMDiscoveryError",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentDiscoveryError.html",
            "failID": "MDMEnrollmentFinished",
            "successID": "Discovery",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MDMOnPremEnrollment": {
            "cxid": "MDMOnPremEnrollment",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentOnPremAuth.html",
            "failID": "MDMEnrollmentFinished",
            "successID": "MDMEnrollmentFinished",
            "visibility": false,
            "showErrorPageOnFailure": true
        },
        "MDMEnrollmentFinished": {
            "cxid": "MDMEnrollmentFinished",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentFinished.html",
            "visibility": false,
            "showErrorPageOnFailure": true
        }
    },
    "MOSETMDMCONNECTTOWORKPROGRESS": {
        "start": "Progress",
        "Progress": {
            "cxid": "Progress",
            "url": "ms-appx-web:///webapps/unifiedEnrollment/views/unifiedEnrollmentProgress.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        }
    },
    "MOSETMDMCONNECTTOWORKPROVISIONINGPROGRESS": {
        "start": "Progress",
        "diagnostics": "OobeDiagnostics",
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "Progress": {
            "cxid": "Progress",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeprovisioningprogress-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldUseRefactoredEsp",
            "preloadCheckSkipOnFailure": true,
            "successID": "ProgressRefactored",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "OobeDiagnostics": {
            "cxid": "OobeDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/troubleshootingdiagnostics-lite-main.html",
            "disableBackNavigationToNode": true,
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "OobeExportDiagnostics": {
            "cxid": "OobeExportDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/exportDiagnostics-main.html",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "ProgressRefactored": {
            "cxid": "ProgressRefactored",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "frameAnimation": "autopilotLottie.json",
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "showErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        }
    },
    "SETPHONEPAIRING": {
        "start": "SMS",
        "SMS": {
            "cxid": "SMS",
            "url": "https://sdx.microsoft.com/frx/mmx/phonepairing/settings",
            "urlint": "https://sdx.microsoft-int.com/frx/mmx/phonepairing/settings",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "queryStringBuilder": "CloudExperienceHost.MobileExperience.getSettingsQueryString",
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "SMS"
        }
    },
    "SETADDLOCALONLY": {
        "start": "Local",
        "Local": {
            "cxid": "Local",
            "url": "ms-appx-web:///views/localAccount.html",
            "visibility": false,
            "showErrorPageOnFailure": true
        }
    },
    "SETSQSALOCALONLY": {
        "start": "SQSA",
        "SQSA": {
            "cxid": "SQSA",
            "url": "ms-appx-web:///views/sqsaLocalAccount.html",
            "visibility": false,
            "showErrorPageOnFailure": true
        }
    },
    "SETADDNEWUSER": {
        "start": "ADDUSER",
        "ADDUSER": {
            "cxid": "ADDUSER",
            "url": "https://account.live.com/adduser",
            "urlint": "https://account.live-int.com/adduser",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "failID": "Local",
            "offlineID": "Local",
            "showErrorPageOnFailure": true
        },
        "Local": {
            "cxid": "Local",
            "url": "ms-appx-web:///views/localAccount.html",
            "backID": "ADDUSER",
            "visibility": false
        }
    },
    "SETCHANGEPWD": {
        "start": "CHANGEPWD",
        "CHANGEPWD": {
            "cxid": "CHANGEPWD",
            "url": "https://account.live.com/client/Password/Change?cpcxt=CPQToken",
            "urlint": "https://account.live-int.com/client/Password/Change?cpcxt=CPQToken",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true
        }
    },
    "TSETADDFAMILY": {
        "start": "ADDFAMILY",
        "ADDFAMILY": {
            "cxid": "ADDFAMILY",
            "url": "https://account.live.com/addtofamily",
            "urlint": "https://account.live-int.com/addtofamily",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true
        }
    },
    "NTHAAD": {
        "start": "AADHello",
        "notifyOnFirstVisible": true,
        "AADHello": {
            "cxid": "AADHello",
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "NGCWithHello",
            "failID": "NGC",
            "cancelID": "NGC",
            "abortID": "NGC",
            "visibility": false
        },
        "NGCWithHello": {
            "cxid": "NGCWithHello",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        },
        "NGC": {
            "cxid": "NGC",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHAADORMDM": {
        "start": "MDMProgress",
        "error": "OobeError",
        "diagnostics": "OobeDiagnostics",
        "notifyOnFirstVisible": true,
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "initializeExternalModalRects": true,
        "OobeError": {
            "cxid": "OobeError",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "MDMProgress": {
            "cxid": "MDMProgress",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeprovisioningprogress-main.html",
            "preloadCheckSkipOnFailure": true,
            "successID": "MDMProgressRefactored",
            "failID": "AADHello",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldUseRefactoredEspAndShouldShowEsp",
            "action2ID": "AADHello",
            "action3ID": "AADHello",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "OobeDiagnostics": {
            "cxid": "OobeDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/troubleshootingdiagnostics-lite-main.html",
            "disableBackNavigationToNode": true,
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "OobeExportDiagnostics": {
            "cxid": "OobeExportDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/exportDiagnostics-main.html",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "MDMProgressRefactored": {
            "cxid": "MDMProgressRefactored",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "frameAnimation": "autopilotLottie.json",
            "preloadCheck": "CloudExperienceHost.AutoPilot.EnrollmentStatusPage",
            "preloadCheckSkipOnFailure": true,
            "successID": "AADHello",
            "failID": "AADHello",
            "action2ID": "AADHello",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "AADHello": {
            "cxid": "AADHello",
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "NGCWithHello",
            "failID": "NGC",
            "cancelID": "NGC",
            "abortID": "NGC",
            "visibility": false
        },
        "NGCWithHello": {
            "cxid": "NGCWithHello",
            "frameAnimation": "lockandpinLottie.json",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        },
        "NGC": {
            "cxid": "NGC",
            "frameAnimation": "lockandpinLottie.json",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHAADNGCONLY": {
        "start": "NGC",
        "notifyOnFirstVisible": true,
        "NGC": {
            "cxid": "NGC",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHAADNGCRESET": {
        "start": "NGC",
        "notifyOnFirstVisible": true,
        "NGC": {
            "cxid": "NGC",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHAADNGCRESETDESTRUCTIVE": {
        "start": "NGC",
        "notifyOnFirstVisible": true,
        "NGC": {
            "cxid": "NGC",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHAADNGCRESETNONDESTRUCTIVE": {
        "start": "NGC",
        "notifyOnFirstVisible": true,
        "NGC": {
            "cxid": "NGC",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHAADNGCFIXME": {
        "start": "NGC",
        "notifyOnFirstVisible": true,
        "NGC": {
            "cxid": "NGC",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "NTHENT": {
        "start": "EnterpriseHello",
        "notifyOnFirstVisible": true,
        "EnterpriseHello": {
            "cxid": "EnterpriseHello",
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "EnterpriseHelloNGC",
            "failID": "EnterpriseNGC",
            "cancelID": "EnterpriseNGC",
            "abortID": "EnterpriseNGC",
            "visibility": false
        },
        "EnterpriseHelloNGC": {
            "cxid": "EnterpriseHelloNGC",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        },
        "EnterpriseNGC": {
            "cxid": "EnterpriseNGC",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        }
    },
    "NTHENTORMDM": {
        "start": "MDMProgress",
        "error": "OobeError",
        "diagnostics": "OobeDiagnostics",
        "notifyOnFirstVisible": true,
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "initializeExternalModalRects": true,
        "OobeError": {
            "cxid": "OobeError",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "MDMProgress": {
            "cxid": "MDMProgress",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeprovisioningprogress-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldUseRefactoredEspAndShouldShowEsp",
            "preloadCheckSkipOnFailure": true,
            "successID": "MDMProgressRefactored",
            "action3ID": "EnterpriseHello",
            "failID": "EnterpriseHello",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "OobeDiagnostics": {
            "cxid": "OobeDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/troubleshootingdiagnostics-lite-main.html",
            "disableBackNavigationToNode": true,
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "OobeExportDiagnostics": {
            "cxid": "OobeExportDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/exportDiagnostics-main.html",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "MDMProgressRefactored": {
            "cxid": "MDMProgressRefactored",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "frameAnimation": "autopilotLottie.json",
            "preloadCheck": "CloudExperienceHost.AutoPilot.EnrollmentStatusPage",
            "preloadCheckSkipOnFailure": true,
            "successID": "EnterpriseHello",
            "failID": "EnterpriseHello",
            "action2ID": "EnterpriseHello",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "EnterpriseHello": {
            "cxid": "EnterpriseHello",
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "EnterpriseHelloNGC",
            "failID": "EnterpriseNGC",
            "cancelID": "EnterpriseNGC",
            "abortID": "EnterpriseNGC",
            "visibility": false
        },
        "EnterpriseHelloNGC": {
            "cxid": "EnterpriseHelloNGC",
            "frameAnimation": "lockandpinLottie.json",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        },
        "EnterpriseNGC": {
            "cxid": "EnterpriseNGC",
            "frameAnimation": "lockandpinLottie.json",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        }
    },
    "NTHENTNGCFIXME": {
        "start": "EnterpriseNGC",
        "notifyOnFirstVisible": true,
        "EnterpriseNGC": {
            "cxid": "EnterpriseNGCFixMe",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        }
    },
    "NTHENTNGCONLY": {
        "start": "EnterpriseNGC",
        "notifyOnFirstVisible": true,
        "EnterpriseNGC": {
            "cxid": "EnterpriseNGC",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        }
    },
    "NTHENTNGCRESET": {
        "start": "EnterpriseNGC",
        "notifyOnFirstVisible": true,
        "EnterpriseNGC": {
            "cxid": "EnterpriseNGCReset",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        }
    },
    "NTHENTNGCRESETDESTRUCTIVE": {
        "start": "EnterpriseNGC",
        "notifyOnFirstVisible": true,
        "EnterpriseNGC": {
            "cxid": "EnterpriseNGCReset",
            "url": "ms-appx-web:///webapps/enterpriseNgcEnrollment/views/enterpriseNgcEnrollment.html",
            "showErrorPageOnFailure": true
        }
    },
    "NTH": {
        "start": "MSA",
        "msaTicketContext": "WindowsLogon",
        "notifyOnFirstVisible": true,
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "MSA": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlinePOPAuth.srf?id=80605",
            "urlint": "https://login.live-int.com/ppsecure/inlinePOPAuth.srf?id=80605",
            "successID": "OneDrive",
            "failID": "OneDrive",
            "cancelID": "OneDrive",
            "abortID": "OneDrive",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "httpMethod": "post",
            "contentType": "application/x-www-form-urlencoded",
            "initialize": {
                "getData": "CloudExperienceHost.MSA.getAuthTokenPostData"
            }
        },
        "OneDrive": {
            "cxid": "OneDrive",
            "preloadCheck": "CloudExperienceHost.OneDrive",
            "url": "https://onedrive.live.com/windows/officeoutofboxexperience",
            "urlint": "https://onedrive.live-int.com/windows/officeoutofboxexperience",
            "visibility": false,
            "disableBackNavigationToNodeOnSuccess": true,
            "successID": "Office",
            "failID": "Office",
            "cancelID": "Office",
            "abortID": "Office",
            "intraWebAppVisibility": false
        },
        "Office": {
            "cxid": "Office",
            "url": "https://oloobe.officeapps.live.com/officeoobe/",
            "urlint": "https://oloobe.officeapps.live-int.com/officeoobe/",
            "visibility": false,
            "intraWebAppVisibility": false
        }
    },
    "NTHNGCUPSELL": {
        "start": "MSAHello",
        "msaTicketContext": "WindowsLogon",
        "notifyOnFirstVisible": true,
        "MSAHello": {
            "cxid": "MSAHello",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "MSANGCEnrollWithHello",
            "failID": "MSANGCEnroll",
            "cancelID": "MSANGCEnroll",
            "abortID": "MSANGCEnroll",
            "visibility": false
        },
        "MSANGCEnrollWithHello": {
            "cxid": "MSANGCEnrollWithHello",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll&hello=1",
            "urlint": "https://account.live-int.com/msangc?fl=enroll&hello=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "offlineID": "OfflineWithHello",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OfflineWithHello": {
            "cxid": "OfflineWithHello",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSANGCEnrollWithHello"
        },
        "MSANGCEnroll": {
            "cxid": "MSANGCEnroll",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll",
            "urlint": "https://account.live-int.com/msangc?fl=enroll",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "offlineID": "Offline",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSANGCEnroll"
        }
    },
    "NTHPRIVACY": {
        "start": "StartSelector",
        "error": "OobeError",
        "notifyOnFirstVisible": true,
        "useBackstackForBackNavigation": true,
        "speechCapable": true,
        "speechDisabled": true,
        "blockLateWebAppCalls": true,
        "blockEarlyExit": true,
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "StartSelector": {
            "cxid": "StartSelector",
            "launcher": "js:OOBEStartSelector",
            "successID": "OobeSettingsSelector",
            "visibility": false
        },
        "OobeError": {
            "cxid": "OobeError",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "OobeSettingsSelector": {
            "cxid": "OobeSettingsSelector",
            "launcher": "js:OobeSettingsSelector",
            "successID": "OobeSettings",
            "cancelID": "OobeSettings",
            "failID": "OobeSettings",
            "abortID": "OobeSettings",
            "action1ID": "OobeSettingsMultiPage",
            "action2ID": "OobeSettingsAadc",
            "visibility": false
        },
        "OobeSettings": {
            "cxid": "OobeSettings",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-main.html",
            "canExitCxh": true,
            "timeout": 120000,
            "visibility": false
        },
        "OobeSettingsMultiPage": {
            "cxid": "OobeSettingsMultiPage",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-multipage-main.html",
            "canExitCxh": true,
            "timeout": 120000,
            "visibility": false
        },
        "OobeSettingsAadc": {
            "cxid": "OobeSettingsAadc",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-aadc-main.html",
            "canExitCxh": true,
            "timeout": 120000,
            "visibility": false
        }
    },
    "NTHEXPEDITEDUPDATE": {
        "start": "NthNDUP",
        "error": "NdupError",
        "notifyOnFirstVisible": true,
        "useBackstackForBackNavigation": true,
        "speechCapable": true,
        "speechDisabled": true,
        "blockLateWebAppCalls": true,
        "blockEarlyExit": true,
        "NdupError": {
            "cxid": "NdupError",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "ExitOnFailure": {
            "cxid": "ExitOnFailure",
            "launcher": "js:OobeSkipNode",
            "canExitCxh": true,
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "NthNDUP": {
            "cxid": "NthNDUP",
            "url": "https://sdx.microsoft.com/frx/cloudndup/nthlogon",
            "urlint": "https://sdx.microsoft-int.com/frx/cloudndup/nthlogon",
            "internetRequired": true,
            "canExitCxh": true,
            "skipExitsCxh": true,
            "cancelID": "ExitOnFailure",
            "failID": "ExitOnFailure",
            "abortID": "ExitOnFailure",
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true,
            "visibility": false
        }
    },
    "FRXINCLUSIVE": {
        "start": "StartSelector",
        "error": "OobeError",
        "diagnostics": "OobeDiagnostics",
        "msaTicketBroker": true,
        "msaTicketContext": "OOBE",
        "notifyOnFirstVisible": true,
        "notifyOnLastFinished": true,
        "initializeExternalModalRects": true,
        "useBackstackForBackNavigation": true,
        "reconnectHandlerCxid": "OobeNetworkLossError",
        "introVideoPath": "../media/oobe-intro.mp4",
        "frameName": "oobe-light-frame",
        "personality":"CloudExperienceHost.Personality.LiteWhite",
        "speechCapable": true,
        "speechDisabled": true,
        "narratorInstruction":true,
        "blockLateWebAppCalls": true,
        "blockEarlyExit": true,
        "StartSelector": {
            "cxid": "StartSelector",
            "launcher": "js:OOBEStartSelector",
            "successID": "AutoPilotPrefetch",
            "visibility": false
        },
        "OobeError": {
            "cxid": "OobeError",
            "frameAnimation": "errorLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "OobeDiagnostics": {
            "cxid": "OobeDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/troubleshootingdiagnostics-lite-main.html",
            "disableBackNavigationToNode": true,
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "OobeExportDiagnostics": {
            "cxid": "OobeExportDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/exportDiagnostics-main.html",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "AutoPilotPrefetch": {
            "cxid": "AutoPilotPrefetch",
            "policyName": "prefetch",
            "launcher": "js:OOBEAutoPilot",
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeLanguage",
            "failID": "OobeLanguage",
            "cancelID": "OobeLanguage",
            "offlineID": "OobeLanguage",
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "timeout": 60000
        },
        "OobeLanguage": {
            "cxid": "OobeLanguage",
            "frameAnimation": "languageLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeDisplayLanguageManagerCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeLanguage-main.html",
            "timeout": 60000,
            "successID": "OobeLanguageAutoPilot",
            "disableBackNavigationToNodeOnSuccess": true,
            "failID": "OobeLanguageAutoPilot",
            "cancelID": "OobeLanguageAutoPilot",
            "abortID": "OobeLanguageAutoPilot",
            "visibility": false
        },
        "OobeLanguageAutoPilot": {
          "cxid": "OobeLanguageAutoPilot",
          "launcher": "js:OOBEAutoPilot",
          "policyName": "CloudAssignedLanguage",
          "successID": "OobeRegion",
          "failID": "OobeRegion",
          "disableErrorPageOnFailure": true,
          "visibility": false
        },
        "OobeEnterpriseProvisioning": {
            "cxid": "OobeEnterpriseProvisioning",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeEnterpriseProvisioning-main.html",
            "frameAnimation": "autopilotLottie.json",
            "cancelID": "OobeLanguage",
            "action1ID": "OobeProvisioningEntry",
            "action2ID": "AutopilotWhiteGloveOobeZdp",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "OobeProvisioningEntry": {
            "cxid": "OobeProvisioningEntry",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeProvisioningEntry-main.html",
            "successID": "OobeProvisioningStatus",
            "cancelID": "OobeEnterpriseProvisioning",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "AutopilotWhiteGloveOobeZdp": {
            "cxid": "AutopilotWhiteGloveOobeZdp",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeZdp-main.html",
            "frameAnimation": "autopilotLottie.json",
            "internetRequired": true,
            "successID": "AutopilotWhiteGloveUpdate",
            "failID": "AutopilotWhiteGloveUpdate",
            "cancelID": "AutopilotWhiteGloveUpdate",
            "offlineID": "AutopilotWhiteGloveUpdate",
            "abortID": "AutopilotWhiteGloveUpdate",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "AutopilotWhiteGloveUpdate": {
            "cxid": "AutopilotWhiteGloveUpdate",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldSkipAutoPilotUpdate",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/Oobeautopilotupdate-main.html",
            "frameAnimation": "autopilotLottie.json",
            "internetRequired": true,
            "successID": "AutopilotWhiteGloveReboot",
            "failID": "AutopilotWhiteGloveReboot",
            "offlineID": "AutopilotWhiteGloveReboot",
            "abortID": "AutopilotWhiteGloveReboot",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "AutopilotWhiteGloveReboot": {
            "cxid": "AutopilotWhiteGloveReboot",
            "launcher": "js:OOBEReboot",
            "successID": "AutopilotWhiteGloveLanding",
            "visibility": false
        },
        "AutopilotWhiteGloveLanding": {
            "cxid": "AutopilotWhiteGloveLanding",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/AutopilotWhiteGloveLanding-main.html",
            "frameAnimation": "autopilotLottie.json",
            "successID": "AutopilotWhiteGloveDeviceRename",
            "failID": "AutopilotWhiteGloveResult",
            "cancelID": "OobeEnterpriseProvisioning",
            "action1ID": "MDMProgressAfterDJ",
            "action2ID": "OobeDomainJoinReboot",
            "action3ID": "AutopilotWhiteGloveLanding",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "AutopilotWhiteGloveDeviceRename": {
          "cxid": "AutopilotWhiteGloveDeviceRename",
          "frameAnimation": "autopilotLottie.json",
          "url": "ms-appx-web:///webapps/inclusiveOobe/view/Oobeautopilotreboot-main.html",
          "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldSkipDeviceRename",
          "preloadCheckSkipOnFailure": true,
          "successID": "AutopilotWhiteGloveDeviceRenameReboot",
          "failID": "AutopilotWhiteGloveDeviceRenameReboot",
          "disableBackNavigationToNodeOnSuccess": true,
          "disableErrorPageOnFailure": true,
          "visibility": false
        },
        "AutopilotWhiteGloveDeviceRenameReboot": {
          "cxid": "AutopilotWhiteGloveDeviceRenameReboot",
          "launcher": "js:OOBEReboot",
          "successID": "MDMProgressForPlugAndForget",
          "visibility": false
        },
        "AutopilotWhiteGloveResult": {
            "cxid": "AutopilotWhiteGloveResult",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/AutopilotWhiteGloveResult-main.html",
            "action1ID": "AutopilotWhiteGloveLanding",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "OobeProvisioningStatus": {
            "cxid": "OobeProvisioningStatus",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeProvisioningStatus-main.html",
            "successID": "OobeLanguage",
            "action1ID": "OobeLocal",
            "action2ID": "OobeProvisioningStatus",
            "action3ID": "OobeProvisioningReboot",
            "visibility": false,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true,
            "canExitCxh": true
        },
        "OobeProvisioningReboot": {
            "cxid": "OobeProvisioningReboot",
            "launcher": "js:OOBEReboot",
            "successID": "OobeProvisioningStatus",
            "visibility": false
        },
        "OobeRegion": {
            "cxid": "OobeRegion",
            "frameAnimation": "regionLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeRegionManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeRegion-main.html",
            "timeout": 60000,
            "successID": "OobeRegionAutoPilot",
            "failID": "OobeRegionAutoPilot",
            "cancelID": "OobeRegionAutoPilot",
            "abortID": "OobeRegionAutoPilot",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "OobeRegionAutoPilot": {
            "cxid": "OobeRegionAutoPilot",
            "launcher": "js:OOBEAutoPilot",
            "policyName": "CloudAssignedRegion",
            "successID": "OobeKeyboard",
            "failID": "OobeKeyboard",
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "OobeKeyboard": {
            "cxid": "OobeKeyboard",
            "frameAnimation": "keyboardLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeKeyboardManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeKeyboard-main.html",
            "timeout": 60000,
            "successID": "OobeWireless",
            "failID": "OobeWireless",
            "cancelID": "OobeWireless",
            "abortID": "OobeWireless",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "OobeWireless": {
            "cxid": "OobeWireless",
            "frameAnimation": "wifiLottie.json",
            "preloadCheck": "CloudExperienceHost.Wireless",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktop",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "OobeNetworkLogging",
            "failID": "OobeRequiredServiceEvent",
            "cancelID": "OobeNetworkLossAversion",
            "action1ID": "OobeCaptivePortal",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeCaptivePortal": {
            "cxid": "OobeCaptivePortal",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy!App",
            "successID": "OobeWireless",
            "failID": "OobeWireless",
            "cancelID": "OobeWireless",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeNetworkLogging": {
            "cxid": "OobeNetworkLogging",
            "requiredFeatureName": "OobeNetworkLogging",
            "launcher": "js:OobeNetworkLogging",
            "ignoreResult": true,
            "successID": "OobeRequiredServiceEvent",
            "failID": "OobeRequiredServiceEvent",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "OobeRequiredServiceEvent": {
            "cxid": "OobeRequiredServiceEvent",
            "requiredFeatureName": "OobeRequiredServiceEvent",
            "url": "https://sdx.microsoft.com/frx/oobe-required-service-event",
            "urlint": "https://sdx.microsoft-int.com/frx/oobe-required-service-event",
            "ignoreResult": true,
            "internetRequired": true,
            "successID": "AutopilotActivation",
            "failID": "AutopilotActivation",
            "cancelID": "AutopilotActivation",
            "offlineID": "AutopilotActivation",
            "abortID": "AutopilotActivation",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "AutopilotActivation": {
            "cxid": "AutopilotActivation",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeautopilotactivation-main.html",
            "frameAnimation": "autopilotLottie.json",
            "preloadCheck": "CloudExperienceHost.AutoPilot.Activation",
            "preloadCheckSkipOnFailure": true,
            "successID": "OobeZdp",
            "failID": "OobeWireless",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "OobeNetworkLossAversion": {
            "cxid": "OobeNetworkLossAversion",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeNetworkLossAversion-main.html",
            "successID": "OobeRequiredServiceEvent",
            "failID": "OobeRequiredServiceEvent",
            "cancelID": "OobeRequiredServiceEvent",
            "abortID": "OobeRequiredServiceEvent",
            "action1ID": "OobeWireless",
            "visibility": false
        },
        "OobeZdp": {
            "cxid": "OobeZdp",
            "frameAnimation": "zdpLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeZdp-main.html",
            "internetRequired": true,
            "successID": "AutopilotUpdate",
            "failID": "AutopilotUpdate",
            "cancelID": "AutopilotUpdate",
            "offlineID": "AutopilotUpdate",
            "abortID": "AutopilotUpdate",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "AutopilotUpdate": {
            "cxid": "AutopilotUpdate",
            "frameAnimation": "autopilotLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/Oobeautopilotupdate-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldSkipAutoPilotUpdate",
            "preloadCheckSkipOnFailure": true,
            "internetRequired": true,
            "successID": "AutoPilotDeviceRename",
            "offlineID": "AutoPilotDeviceRename",
            "abortID": "AutoPilotDeviceRename",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "AutoPilotDeviceRename": {
            "cxid": "AutoPilotDeviceRename",
            "frameAnimation": "autopilotLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/Oobeautopilotreboot-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldSkipDeviceRename",
            "preloadCheckSkipOnFailure": true,
            "successID": "Reboot",
            "failID": "Reboot",
            "disableBackNavigationToNodeOnSuccess": true,
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "Reboot": {
            "cxid": "Reboot",
            "launcher": "js:OOBEReboot",
            "successID": "OobeWirelessAfterZDPReboot",
            "visibility": false
        },
        "OobeWirelessAfterZDPReboot": {
            "cxid": "OobeWirelessAfterZDPReboot",
            "frameAnimation": "wifiLottie.json",
            "preloadCheck": "CloudExperienceHost.WirelessCommercial",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktop",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "AutoPilotVetoESTS",
            "failID": "AutoPilotVetoESTS",
            "cancelID": "OobeNetworkLossAversionAfterZDPReboot",
            "action1ID": "OobeCaptivePortalAfterZDPReboot",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeCaptivePortalAfterZDPReboot": {
            "cxid": "OobeCaptivePortalAfterZDPReboot",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy!App",
            "successID": "OobeWirelessAfterZDPReboot",
            "failID": "OobeWirelessAfterZDPReboot",
            "cancelID": "OobeWirelessAfterZDPReboot",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeNetworkLossAversionAfterZDPReboot": {
            "cxid": "OobeNetworkLossAversionAfterZDPReboot",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeNetworkLossAversion-main.html",
            "successID": "AutoPilotVetoESTS",
            "failID": "AutoPilotVetoESTS",
            "action1ID": "OobeWirelessAfterZDPReboot",
            "visibility": false
        },
        "AutoPilotVetoESTS": {
            "cxid": "AutoPilotVetoESTS",
            "frameAnimation": "autopilotLottie.json",
            "url": "https://login.microsoftonline.com/webapp/AutoPilot/2",
            "urlint": "https://login.windows-ppe.net/webapp/AutoPilot/2",
            "internetRequired": true,
            "queryStringBuilder": "CloudExperienceHost.AutoPilot.getZTDQueryStringAsync",
            "preloadCheck": "CloudExperienceHost.AutoPilot.Veto",
            "preloadCheckSkipOnFailure": true,
            "successID": "OobeEnterpriseProvisioningAfterConnectivity",
            "failID": "OobeEnterpriseProvisioningAfterConnectivity",
            "offlineID": "OobeEnterpriseProvisioningAfterConnectivity",
            "action1ID": "MDMProgressForPlugAndForget",
            "action2ID": "AutoPilotVetoReboot",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "AutoPilotVetoReboot": {
            "cxid": "AutoPilotVetoReboot",
            "launcher": "js:OOBEReboot",
            "successID": "OobeLanguage",
            "visibility": false
        },
        "OobeEnterpriseProvisioningAfterConnectivity": {
            "cxid": "OobeEnterpriseProvisioningAfterConnectivity",
            "preloadCheck": "CloudExperienceHostAPI.Provisioning.ProvisioningStatusManagerStatics",
            "launcher": "js:OobeEnterpriseProvisioningAfterConnectivity",
            "timeout": 120000,
            "successID": "OobeProvisioningRebootAfterConnectivity",
            "failID": "OobeProvisioningRebootAfterConnectivity",
            "cancelID": "OobeProvisioningRebootAfterConnectivity",
            "visibility": false,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeProvisioningRebootAfterConnectivity": {
            "cxid": "OobeProvisioningRebootAfterConnectivity",
            "launcher": "js:OOBEReboot",
            "successID": "OobeEnableDriverUpdate",
            "visibility": false
        },
        "OobeEnableDriverUpdate": {
            "cxid": "OobeEnableDriverUpdate",
            "launcher": "js:OobeEnableDriverUpdate",
            "ignoreResult": true,
            "successID": "OobeEula",
            "failID": "OobeEula",
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "OobeEula": {
            "cxid": "OobeEula",
            "frameAnimation": "eulaLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeEulaManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeEula-main.html",
            "timeout": 60000,
            "successID": "OobeDeviceName",
            "cancelID": "OobeDeviceName",
            "abortID": "OobeDeviceName",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "OobeDeviceName": {
            "cxid": "OobeDeviceName",
            "preloadCheck": "CloudExperienceHost.DeviceName",
            "url": "https://sdx.microsoft.com/frx/device-naming",
            "urlint": "https://sdx.microsoft-int.com/frx/device-naming",
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeDeviceNameReboot",
            "failID": "OobeDeviceNameReboot",
            "cancelID": "OobeDeviceNameReboot",
            "abortID": "OobeDeviceNameReboot",
            "offlineID": "OobeDeviceNameReboot",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "OobeDeviceNameReboot": {
            "cxid": "OobeDeviceNameReboot",
            "launcher": "js:OOBEReboot",
            "successID": "OobeCloudContentHydrant",
            "visibility": false
        },
        "OobeWirelessAfterDeviceNameReboot": {
            "cxid": "OobeWirelessAfterDeviceNameReboot",
            "frameAnimation": "wifiLottie.json",
            "preloadCheck": "CloudExperienceHost.Wireless",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktop",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "OobeCloudContentHydrant",
            "failID": "OobeCloudContentHydrant",
            "cancelID": "OobeNetworkLossAversionAfterDeviceNameReboot",
            "action1ID": "OobeCaptivePortalAfterDeviceNameReboot",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeCaptivePortalAfterDeviceNameReboot": {
            "cxid": "OobeCaptivePortalAfterDeviceNameReboot",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy!App",
            "successID": "OobeWirelessAfterDeviceNameReboot",
            "failID": "OobeWirelessAfterDeviceNameReboot",
            "cancelID": "OobeWirelessAfterDeviceNameReboot",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeNetworkLossAversionAfterDeviceNameReboot": {
            "cxid": "OobeNetworkLossAversionAfterDeviceNameReboot",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeNetworkLossAversion-main.html",
            "successID": "OobeCloudContentHydrant",
            "failID": "OobeCloudContentHydrant",
            "cancelID": "OobeCloudContentHydrant",
            "abortID": "OobeCloudContentHydrant",
            "action1ID": "OobeWirelessAfterDeviceNameReboot",
            "visibility": false
        },
        "OobeCloudContentHydrant": {
            "cxid": "OobeCloudContentHydrant",
            "preloadCheck": "CloudExperienceHost.AccountAndServices",
            "launcher": "js:OobeCloudContentHydrant",
            "ignoreResult": true,
            "successID": "OobeRetailDemoEntry",
            "failID": "OobeRetailDemoEntry",
            "abortID": "OobeRetailDemoEntry",
            "cancelID": "OobeRetailDemoEntry",
            "disableErrorPageOnFailure": true
        },
        "OobeRetailDemoEntry": {
            "cxid": "OobeRetailDemoEntry",
            "launcher": "js:OobeRetailDemoEntry",
            "successID": "AutopilotPostReset",
            "action1ID": "rdxSetup",
            "action2ID": "OobeSettingsSelector",
            "failID": "AutopilotPostReset",
            "abortID": "AutopilotPostReset",
            "cancelID": "AutopilotPostReset",
            "visibility": false
        },
        "AutopilotPostReset": {
            "cxid": "AutopilotPostReset",
            "launcher": "js:OOBEAutoPilot",
            "policyName": "postReset",
            "successID": "OobeDomainJoin",
            "failID": "OobeDomainJoin",
            "abortID": "OobeDomainJoin",
            "cancelID": "OobeDomainJoin",
            "action1ID": "RebootZtd",
            "action2ID": "MDMProgressAfterDJ",
            "action3ID": "OobeAAD",
            "disableBackNavigationToNode": true
        },
        "OobeDomainJoin": {
            "cxid": "OobeDomainJoin",
            "preloadCheck": "EnterpriseDeviceManagement.Enrollment.ReflectedEnrollmentStatics",
            "frameAnimation": "autopilotLottie.json",
            "url": "https://login.microsoftonline.com/webapp/OtaDomainJoin/3",
            "urlint": "https://login.windows-ppe.net/webapp/OtaDomainJoin/3",
            "internetRequired": true,
            "successID": "OobeIDPS",
            "failID": "OobeIDPS",
            "abortID": "OobeIDPS",
            "cancelID": "OobeIDPS",
            "offlineID": "OobeIDPS",
            "action1ID": "MDMProgressAfterDJ",
            "action2ID": "OobeDomainJoinReboot",
            "ignoreResult": true,
            "skipReconnectHandler": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true,
            "visibility": false,
            "initialize": {
                "getData": "CloudExperienceHost.getAllowedIdentityProviders",
                "key": "cxh-idps"
            }
        },
        "OobeDomainJoinReboot": {
            "cxid": "OobeDomainJoinReboot",
            "launcher": "js:OOBEReboot",
            "successID": "MDMProgressAfterDJ",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "MDMProgressAfterDJ": {
            "cxid": "MDMProgressAfterDJ",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeprovisioningprogress-main.html",
            "successID": "MDMProgressAfterDJRefactored",
            "failID": "OobeSettingsSelector",
            "action1ID": "OobeDomainJoinReboot",
            "action2ID": "AutopilotWhiteGloveResult",
            "action3ID": "OobeDomainJoinReboot",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldUseRefactoredEspAndShouldShowEsp",
            "preloadCheckSkipOnFailure": true,
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "MDMProgressAfterDJRefactored": {
            "cxid": "MDMProgressAfterDJ",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "frameAnimation": "autopilotLottie.json",
            "successID": "OobeSettingsSelector",
            "failID": "OobeSettingsSelector",
            "action1ID": "OobeDomainJoinReboot",
            "action2ID": "AutopilotWhiteGloveResult",
            "preloadCheck": "CloudExperienceHost.AutoPilot.EnrollmentStatusPage",
            "preloadCheckSkipOnFailure": true,
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "OobeIDPS": {
            "cxid": "OobeIDPS",
            "preloadCheck": "CloudExperienceHost.AccountDisambiguation",
            "url": "https://account.live.com/disambiguationpage",
            "urlint": "https://account.live-int.com/disambiguationpage",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "nodeCapabilities": {"MsaDoneActionId": "action1", "AadDoneActionId": "action2"},
            "internetRequired": true,
            "ignoreResult": true,
            "successID": "OobeLocal",
            "failID": "AutopilotOfflineCheck",
            "cancelID": "OobeLocal",
            "offlineID": "AutopilotOfflineCheck",
            "abortID": "OobeLocal",
            "action1ID": "OobeMSAValueProp",
            "action2ID": "OobeAAD",
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "AutopilotOfflineCheck": {
            "cxid": "AutopilotOfflineCheck",
            "launcher": "js:OOBEAutoPilot",
            "policyName": "offlineCheck",
            "successID": "OobeLocal",
            "failID": "OobeLocal",
            "cancelID": "OobeLocal",
            "abortID": "OobeLocal",
            "action1ID": "OobeWireless",
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "OobeAAD": {
            "cxid": "OobeAAD",
            "frameAnimation": "aadSigninLottie.json",
            "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
            "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
            "internetRequired": true,
            "successID": "AutopilotUpdatePostEnrollment",
            "failID": "OobeLocal",
            "cancelID": "OobeIDPS",
            "abortID": "OobeLocal",
            "offlineID": "OobeLocal",
            "disableBackNavigationToNode": true,
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "initialize": {
                "getData": "CloudExperienceHost.getAllowedIdentityProviders",
                "key": "cxh-idps"
            }
        },
        "AutopilotUpdatePostEnrollment": {
            "cxid": "AutopilotUpdatePostEnrollment",
            "frameAnimation": "autopilotLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/Oobeautopilotupdate-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldSkipPostEnrollmentAutopilotUpdate",
            "preloadCheckSkipOnFailure": true,
            "internetRequired": true,
            "successID": "RebootZtd",
            "offlineID": "RebootZtd",
            "abortID": "RebootZtd",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        },
        "RebootZtd": {
            "cxid": "RebootZtd",
            "launcher": "js:OOBEReboot",
            "successID": "OobeWirelessAfterRebootZtd",
            "visibility": false
        },
        "OobeWirelessAfterRebootZtd": {
            "cxid": "OobeWirelessAfterRebootZtd",
            "frameAnimation": "wifiLottie.json",
            "preloadCheck": "CloudExperienceHost.WirelessCommercial",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktop",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "MDMProgressAfterAAD",
            "failID": "MDMProgressAfterAAD",
            "cancelID": "OobeNetworkLossAversionAfterRebootZtd",
            "action1ID": "OobeCaptivePortalAfterRebootZtd",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeCaptivePortalAfterRebootZtd": {
            "cxid": "OobeCaptivePortalAfterRebootZtd",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy!App",
            "successID": "OobeWirelessAfterRebootZtd",
            "failID": "OobeWirelessAfterRebootZtd",
            "cancelID": "OobeWirelessAfterRebootZtd",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeNetworkLossAversionAfterRebootZtd": {
            "cxid": "OobeNetworkLossAversionAfterRebootZtd",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeNetworkLossAversion-main.html",
            "successID": "MDMProgressAfterAAD",
            "failID": "MDMProgressAfterAAD",
            "action1ID": "OobeWirelessAfterRebootZtd",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "MDMProgressForPlugAndForget": {
            "cxid": "MDMProgressForPlugAndForget",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeprovisioningprogress-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldUseRefactoredEsp",
            "preloadCheckSkipOnFailure": true,
            "successID": "MDMProgressForPlugAndForgetRefactored",
            "failID": "OobeSettingsSelector",
            "action1ID": "RebootZtdForPlugAndForget",
            "action2ID": "AutopilotWhiteGloveResult",
            "action3ID": "OobeSettingsSelector",
            "timeout": 120000,
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "MDMProgressForPlugAndForgetRefactored": {
            "cxid": "MDMProgressForPlugAndForgetRefactored",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "frameAnimation": "autopilotLottie.json",
            "successID": "OobeSettingsSelector",
            "failID": "OobeSettingsSelector",
            "action1ID": "RebootZtdForPlugAndForget",
            "action2ID": "AutopilotWhiteGloveResult",
            "timeout": 120000,
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "RebootZtdForPlugAndForget": {
            "cxid": "RebootZtdForPlugAndForget",
            "launcher": "js:OOBEReboot",
            "successID": "OobeWirelessAfterRebootZtdForPlugAndForget",
            "visibility": false
        },
        "OobeWirelessAfterRebootZtdForPlugAndForget": {
            "cxid": "OobeWirelessAfterRebootZtdForPlugAndForget",
            "frameAnimation": "wifiLottie.json",
            "preloadCheck": "CloudExperienceHost.WirelessCommercial",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktop",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "MDMProgressForPlugAndForget",
            "failID": "MDMProgressForPlugAndForget",
            "cancelID": "OobeNetworkLossAversionAfterRebootZtdForPlugAndForget",
            "action1ID": "OobeCaptivePortalAfterRebootZtdForPlugAndForget",
            "disableBackNavigationToNode": true
        },
        "OobeCaptivePortalAfterRebootZtdForPlugAndForget": {
            "cxid": "OobeCaptivePortalAfterRebootZtdForPlugAndForget",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy!App",
            "successID": "OobeWirelessAfterRebootZtdForPlugAndForget",
            "failID": "OobeWirelessAfterRebootZtdForPlugAndForget",
            "cancelID": "OobeWirelessAfterRebootZtdForPlugAndForget",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobeNetworkLossAversionAfterRebootZtdForPlugAndForget": {
            "cxid": "OobeNetworkLossAversionAfterRebootZtdForPlugAndForget",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeNetworkLossAversion-main.html",
            "successID": "MDMProgressForPlugAndForget",
            "failID": "MDMProgressForPlugAndForget",
            "action1ID": "OobeWirelessAfterRebootZtdForPlugAndForget",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "MDMProgressAfterAAD": {
            "cxid": "MDMProgressAfterAAD",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeprovisioningprogress-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldUseRefactoredEspAndShouldShowEsp",
            "preloadCheckSkipOnFailure": true,
            "successID": "MDMProgressAfterAADRefactored",
            "failID": "OobeSettingsSelector",
            "action1ID": "RebootZtd",
            "action3ID": "OobeSettingsSelector",
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "MDMProgressAfterAADRefactored": {
            "cxid": "MDMProgressAfterAADRefactored",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.EnrollmentStatusPage",
            "frameAnimation": "autopilotLottie.json",
            "preloadCheckSkipOnFailure": true,
            "successID": "OobeSettingsSelector",
            "failID": "OobeSettingsSelector",
            "action1ID": "RebootZtd",
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true
        },
        "OobeMSAValueProp": {
            "cxid": "OobeMSAValueProp",
            "url": "https://sdx.microsoft.com/frx/msa-benefits",
            "urlint": "https://sdx.microsoft-int.com/frx/msa-benefits",
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeMSA",
            "failID": "OobeMSA",
            "cancelID": "OobeMSA",
            "abortID": "OobeMSA",
            "offlineID": "OobeMSA",
            "visibility": false,
            "ignoreResult": true,
            "disableErrorPageOnFailure": true
        },
        "OobeMSA": {
            "cxid": "OobeMSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForKnownUserLogin",
            "internetRequired": true,
            "successID": "OobeWindowsAccountSyncConsent",
            "failID": "OobeLocal",
            "cancelID": "OobeIDPS",
            "offlineID": "OobeLocal",
            "disableBackNavigationToNode": true,
            "abortID": "OobeMSAOfferStatic",
            "disableErrorPageOnFailure": true
        },
        "OobeWindowsAccountSyncConsent": {
            "cxid": "OobeWindowsAccountSyncConsent",
            "url": "https://sdx.microsoft.com/frx/windows-account-sync-consent/oobe",
            "urlint": "https://sdx.microsoft-int.com/frx/windows-account-sync-consent/oobe",
            "requiredFeatureName": "OobeWindowsAccountSyncConsentPage",
            "supportedSignInIdentityProviders": [ "msa" ],
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeMSACloudBackupRestore",
            "failID": "OobeMSACloudBackupRestore",
            "cancelID": "OobeMSACloudBackupRestore",
            "abortID": "OobeMSACloudBackupRestore",
            "offlineID": "OobeMSACloudBackupRestore",
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "OobeMSACloudBackupRestore": {
            "cxid": "OobeMSACloudBackupRestore",
            "url": "https://sdx.microsoft.com/frx/cloud-backup-restore",
            "urlint": "https://sdx.microsoft-int.com/frx/cloud-backup-restore",
            "preloadCheck": "CloudExperienceHost.BackupRestore.OobeCloudBackupRestore",
            "requiredDisabledFeatureName": "OobeCbr2",
            "supportedSignInIdentityProviders": [ "msa" ],
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeMSACloudBackupRestore2",
            "failID": "OobeMSACloudBackupRestore2",
            "cancelID": "OobeMSACloudBackupRestore2",
            "abortID": "OobeMSACloudBackupRestore2",
            "offlineID": "OobeMSACloudBackupRestore2",
            "disableErrorPageOnFailure": true,
            "ignoreResult": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeMSACloudBackupRestore2": {
            "cxid": "OobeMSACloudBackupRestore2",
            "url": "https://sdx.microsoft.com/frx/cloud-backup-restore2",
            "urlint": "https://sdx.microsoft-int.com/frx/cloud-backup-restore2",
            "preloadCheck": "CloudExperienceHost.BackupRestore.OobeCloudBackupRestore",
            "requiredFeatureName": "OobeCbr2",
            "requiredDisabledFeatureName": "OobeRestoreUx",
            "supportedSignInIdentityProviders": [ "msa" ],
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeMSACloudBackupRestoreUX",
            "failID": "OobeMSACloudBackupRestoreUX",
            "cancelID": "OobeMSACloudBackupRestoreUX",
            "abortID": "OobeMSACloudBackupRestoreUX",
            "offlineID": "OobeMSACloudBackupRestoreUX",
            "disableErrorPageOnFailure": true,
            "ignoreResult": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeMSACloudBackupRestoreUX": {
            "cxid": "OobeMSACloudBackupRestoreUX",
            "url": "https://sdx.microsoft.com/frx/cloud-backup-restore2",
            "urlint": "https://sdx.microsoft-int.com/frx/cloud-backup-restore2",
            "preloadCheck": "CloudExperienceHost.BackupRestore.OobeCloudBackupRestore",
            "requiredFeatureName": "OobeRestoreUx",
            "supportedSignInIdentityProviders": [ "msa" ],
            "internetRequired": true,
            "successID": "OobeMSAHello",
            "failID": "OobeMSAHello",
            "cancelID": "OobeMSAHello",
            "abortID": "OobeMSAHello",
            "offlineID": "OobeMSAHello",
            "disableBackNavigationToNodeOnSuccess": true,
            "disableErrorPageOnFailure": true,
            "ignoreResult": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeMSAHello": {
            "cxid": "OobeMSAHello",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeHello-main.html",
            "ignoreResult": true,
            "successID": "OobeMSANGCEnrollWithHello",
            "failID": "OobeMSANGCEnroll",
            "cancelID": "OobeMSANGCEnroll",
            "abortID": "OobeMSANGCEnroll",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false,
            "timeout": 120000
        },
        "OobeMSANGCEnrollWithHello": {
            "cxid": "OobeMSANGCEnrollWithHello",
            "frameAnimation": "lockandpinLottie.json",
            "url": "https://account.live.com/msangc?fl=enroll&hello=1",
            "urlint": "https://account.live-int.com/msangc?fl=enroll&hello=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "internetRequired": true,
            "ignoreResult": true,
            "successID": "OobePreSettingsExperimentation",
            "failID": "OobePreSettingsExperimentation",
            "cancelID": "OobePreSettingsExperimentation",
            "abortID": "OobePreSettingsExperimentation",
            "offlineID": "OobePreSettingsExperimentation",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeMSANGCEnroll": {
            "cxid": "OobeMSANGCEnroll",
            "frameAnimation": "lockandpinLottie.json",
            "url": "https://account.live.com/msangc?fl=enroll",
            "urlint": "https://account.live-int.com/msangc?fl=enroll",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "internetRequired": true,
            "ignoreResult": true,
            "successID": "OobePreSettingsExperimentation",
            "failID": "OobePreSettingsExperimentation",
            "cancelID": "OobePreSettingsExperimentation",
            "abortID": "OobePreSettingsExperimentation",
            "offlineID": "OobePreSettingsExperimentation",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeMSAOfferStatic": {
            "cxid": "OobeMSAOfferStatic",
            "url": "https://sdx.microsoft.com/frx/lav/static?cxhScenario=frx&cxhPlatform=desktop",
            "urlint": "https://sdx.microsoft-int.com/frx/lav/static?cxhScenario=frx&cxhPlatform=desktop",
            "internetRequired": true,
            "ignoreResult": true,
            "skipReconnectHandler": true,
            "successID": "OobeMSA",
            "failID": "OobeLocal",
            "cancelID": "OobeLocal",
            "abortID": "OobeLocal",
            "offlineID": "OobeLocal",
            "preloadSkipID": "OobeLocal",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "OobeLocal": {
            "cxid": "OobeLocal",
            "frameAnimation": "localaccountLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeLocalAccount-main.html",
            "preloadCheck": "CloudExperienceHost.LocalAccount",
            "disableBackNavigationToNodeOnSuccess": true,
            "successID": "OobeLocalHello",
            "preloadSkipID": "OobeDomainJoin",
            "visibility": false
        },
        "OobeLocalHello": {
            "cxid": "OobeLocalHello",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeHello-main.html",
            "ignoreResult": true,
            "successID": "OobeLocalNGC",
            "failID": "OobePreSettingsExperimentation",
            "cancelID": "OobePreSettingsExperimentation",
            "abortID": "OobePreSettingsExperimentation",
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false,
            "timeout": 120000
        },
        "OobeLocalNGC": {
            "cxid": "OobeLocalNGC",
            "frameAnimation": "lockandpinLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeLocalNGC-main.html",
            "ignoreResult": true,
            "successID": "OobePreSettingsExperimentation",
            "failID": "OobePreSettingsExperimentation",
            "cancelID": "OobePreSettingsExperimentation",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "OobePreSettingsExperimentation": {
            "cxid": "OobePreSettingsExperimentation",
            "url": "https://sdx.microsoft.com/frx/oobe-pre-settings-experimentation",
            "urlint": "https://sdx.microsoft-int.com/frx/oobe-pre-settings-experimentation",
            "preloadCheck": "CloudExperienceHost.OobeExperimentationPages",
            "supportedSignInIdentityProviders": [ "local", "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "ignoreResult": true,
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeMSAPrivacySettings",
            "failID": "OobeMSAPrivacySettings",
            "cancelID": "OobeMSAPrivacySettings",
            "offlineID": "OobeMSAPrivacySettings",
            "abortID": "OobeMSAPrivacySettings",
            "preloadSkipID": "OobeMSAPrivacySettings",
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeMSAPrivacySettings": {
            "cxid": "OobeMSAPrivacySettings",
            "url": "https://sdx.microsoft.com/frx/oobe-msa-privacy-consent",
            "urlint": "https://sdx.microsoft-ppe.com/frx/oobe-msa-privacy-consent",
            "supportedSignInIdentityProviders": [ "msa" ],
            "internetRequired": true,
            "requiredFeatureName": "OobeMSAPrivacyConsent",
            "successID": "OobeSettingsSelector",
            "cancelID": "OobeSettingsSelector",
            "offlineID": "OobeSettingsSelector",
            "failID": "OobeSettingsSelector",
            "abortID": "OobeSettingsSelector",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "OobeSettingsSelector": {
            "cxid": "OobeSettingsSelector",
            "launcher": "js:OobeSettingsSelector",
            "successID": "OobeSettings",
            "cancelID": "OobeSettings",
            "failID": "OobeSettings",
            "abortID": "OobeSettings",
            "action1ID": "OobeSettingsMultiPage",
            "action2ID": "OobeSettingsAadc",
            "visibility": false
        },
        "OobeSettings": {
            "cxid": "OobeSettings",
            "frameAnimation": "privacysettingsLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeSettingsManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-main.html",
            "successID": "OobeUpdateSettings",
            "visibility": false
        },
        "OobeSettingsMultiPage": {
            "cxid": "OobeSettingsMultiPage",
            "frameAnimation": "privacysettingsLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeSettingsManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-multipage-main.html",
            "successID": "OobeUpdateSettings",
            "visibility": false
        },
        "OobeSettingsAadc": {
            "cxid": "OobeSettingsAadc",
            "frameAnimation": "privacysettingsLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeSettingsManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeSettings-aadc-main.html",
            "successID": "OobeUpdateSettings",
            "visibility": false
        },
        "OobeUpdateSettings": {
            "cxid": "OobeUpdateSettings",
            "frameAnimation": "updateSettingsLottie.json",
            "preloadCheck": "CloudExperienceHostAPI.OobeUpdateSettingsManagerStaticsCore",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeUpdateSettings-main.html",
            "successID": "OobeOemRegistrationPostSettings",
            "visibility": false
        },
        "OobeOemRegistrationPostSettings": {
            "cxid": "OobeOemRegistrationPostSettings",
            "frameAnimation": "oemRegistrationLottie.json",
            "preloadCheck": "CloudExperienceHost.OEMRegistrationInfo",
            "preloadCheckSkipOnFailure": true,
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeOemRegistration-main.html",
            "ignoreResult": true,
            "requiredFeatureName": "EarlyOobeOEMRegistration",
            "successID": "OobeUserIntent",
            "failID": "OobeUserIntent",
            "cancelID": "OobeUserIntent",
            "abortID": "OobeUserIntent",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "OobeUserIntent": {
            "cxid": "OobeUserIntent",
            "url": "https://sdx.microsoft.com/frx/oobe-user-intent-preload",
            "urlint": "https://sdx.microsoft-int.com/frx/oobe-user-intent-preload",
            "preloadCheck": "CloudExperienceHost.OobeUserIntent",
            "supportedSignInIdentityProviders": [ "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "ignoreResult": true,
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobePostUserIntentExperimentation",
            "cancelID": "OobePostUserIntentExperimentation",
            "offlineID": "OobePostUserIntentExperimentation",
            "failID": "OobePostUserIntentExperimentation",
            "abortID": "OobePostUserIntentExperimentation",
            "preloadSkipID": "OobePostUserIntentExperimentation",
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobePostUserIntentExperimentation": {
            "cxid": "OobePostUserIntentExperimentation",
            "url": "https://sdx.microsoft.com/frx/oobe-post-user-intent-experimentation",
            "urlint": "https://sdx.microsoft-int.com/frx/oobe-post-user-intent-experimentation",
            "preloadCheck": "CloudExperienceHost.OobeExperimentationPages",
            "supportedSignInIdentityProviders": [ "local", "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "ignoreResult": true,
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobePhonePairing",
            "cancelID": "OobePhonePairing",
            "offlineID": "OobePhonePairing",
            "failID": "OobePhonePairing",
            "abortID": "OobePhonePairing",
            "preloadSkipID": "OobePhonePairing",
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobePhonePairing": {
            "cxid": "OobePhonePairing",
            "url": "https://sdx.microsoft.com/frx/mmx/phonepairingexperience/oobe",
            "urlint": "https://sdx.microsoft-int.com/frx/mmx/phonepairingexperience/oobe",
            "requiredFeatureName": "OobeMMXPage",
            "supportedSignInIdentityProviders": [ "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "preloadCheck": "CloudExperienceHost.MobileExperience.OOBE",
            "ignoreResult": true,
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeOneDrive",
            "failID": "OobeOneDrive",
            "cancelID": "OobeOneDrive",
            "abortID": "OobeOneDrive",
            "offlineID": "OobeOneDrive",
            "visibility": false,
            "disableErrorPageOnFailure": true,
            "queryStringBuilder": "CloudExperienceHost.MobileExperience.getOobeQueryString",
            "intraWebAppVisibility": false
        },
        "OobeOneDrive": {
            "cxid": "OobeOneDrive",
            "url": "https://onedrive.live.com/windows/officeoutofboxexperience",
            "urlint": "https://onedrive.live-int.com/windows/officeoutofboxexperience",
            "supportedSignInIdentityProviders": [ "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "preloadCheck": "CloudExperienceHost.OneDrive",
            "skipReconnectHandler": true,
            "ignoreResult": true,
            "internetRequired": true,
            "successID": "OobeEdgeSyncConsent",
            "failID": "OobeEdgeSyncConsent",
            "cancelID": "OobeEdgeSyncConsent",
            "abortID": "OobeEdgeSyncConsent",
            "offlineID": "OobeEdgeSyncConsent",
            "visibility": false,
            "needCustomHeaders": [ "cxh-windowsTelemetryLevel" ],
            "disableErrorPageOnFailure": true,
            "intraWebAppVisibility": false
        },
        "OobeEdgeSyncConsent": {
            "cxid": "OobeEdgeSyncConsent",
            "url": "https://sdx.microsoft.com/frx/oobe-edge-sync-consent",
            "urlint": "https://sdx.microsoft-int.com/frx/oobe-edge-sync-consent",
            "supportedSignInIdentityProviders": [ "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "skipReconnectHandler": true,
            "ignoreResult": true,
            "internetRequired": true,
            "successID": "OobeOffice",
            "failID": "OobeOffice",
            "cancelID": "OobeOffice",
            "abortID": "OobeOffice",
            "offlineID": "OobeOffice",
            "visibility": false,
            "disableErrorPageOnFailure": true,
            "intraWebAppVisibility": false
        },
        "OobeOffice": {
            "cxid": "OobeOffice",
            "url": "https://oloobe.officeapps.live.com/officeoobe/",
            "urlint": "https://oloobe.officeapps.live-int.com/officeoobe/",
            "supportedSignInIdentityProviders": [ "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "skipReconnectHandler": true,
            "ignoreResult": true,
            "internetRequired": true,
            "successID": "OobeGamepass",
            "failID": "OobeGamepass",
            "cancelID": "OobeGamepass",
            "abortID": "OobeGamepass",
            "offlineID": "OobeGamepass",
            "visibility": false,
            "needCustomHeaders": [ "cxh-windowsProductKey", "cxh-windowsProductKeyFiveByFive", "cxh-windowsTelemetryLevel" ],
            "disableErrorPageOnFailure": true,
            "intraWebAppVisibility": false
        },
        "OobeGamepass": {
            "cxid": "OobeGamepass",
            "url": "https://oloobe.officeapps.live.com/officeoobe/gamepass",
            "urlint": "https://oloobe.officeapps.live-int.com/officeoobe/gamepass",
            "preloadCheck": "CloudExperienceHost.OobeGamePass",
            "supportedSignInIdentityProviders": [ "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "ignoreResult": true,
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobePostGamepassExperimentation",
            "cancelID": "OobePostGamepassExperimentation",
            "offlineID": "OobePostGamepassExperimentation",
            "failID": "OobePostGamepassExperimentation",
            "abortID": "OobePostGamepassExperimentation",
            "preloadSkipID": "OobePostGamepassExperimentation",
            "needCustomHeaders": [ "cxh-windowsTelemetryLevel" ],
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobePostGamepassExperimentation": {
            "cxid": "OobePostGamepassExperimentation",
            "url": "https://sdx.microsoft.com/frx/oobe-post-gamepass-experimentation",
            "urlint": "https://sdx.microsoft-int.com/frx/oobe-post-gamepass-experimentation",
            "preloadCheck": "CloudExperienceHost.OobeExperimentationPages",
            "supportedSignInIdentityProviders": [ "local", "msa" ],
            "disableBackNavigationToNodeOnSuccess": true,
            "ignoreResult": true,
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "OobeOemRegistration",
            "cancelID": "OobeOemRegistration",
            "offlineID": "OobeOemRegistration",
            "failID": "OobeOemRegistration",
            "abortID": "OobeOemRegistration",
            "preloadSkipID": "OobeOemRegistration",
            "needCustomHeaders": [ "cxh-windowsTelemetryLevel" ],
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OobeOemRegistration": {
            "cxid": "OobeOemRegistration",
            "frameAnimation": "oemRegistrationLottie.json",
            "preloadCheck": "CloudExperienceHost.OEMRegistrationInfo",
            "preloadCheckSkipOnFailure": true,
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeOemRegistration-main.html",
            "ignoreResult": true,
            "requiredDisabledFeatureName": "EarlyOobeOEMRegistration",
            "successID": "OobeTelemetryFlush",
            "failID": "OobeTelemetryFlush",
            "cancelID": "OobeTelemetryFlush",
            "abortID": "OobeTelemetryFlush",
            "visibility": false,
            "disableErrorPageOnFailure": true
        },
        "OobeTelemetryFlush": {
            "cxid": "OobeTelemetryFlush",
            "preloadCheck": "CloudExperienceHost.AccountAndServices",
            "launcher": "js:OobeTelemetryFlush",
            "ignoreResult": true,
            "successID": "OobeNDUP",
            "failID": "OobeNDUP",
            "cancelID": "OobeNDUP",
            "abortID": "OobeNDUP",
            "visibility": false,
            "disableBackNavigationToNode": true,
            "disableErrorPageOnFailure": true
        },
        "OobeNDUP": {
            "cxid": "OobeNDUP",
            "preloadCheck": "CloudExperienceHost.ExpeditedUpdate",
            "url": "https://sdx.microsoft.com/frx/cloud-ndup",
            "urlint": "https://sdx.microsoft-int.com/frx/cloud-ndup",
            "internetRequired": true,
            "skipReconnectHandler": true,
            "successID": "RebootNDUP",
            "failID": "RebootNDUP",
            "cancelID": "RebootNDUP",
            "abortID": "RebootNDUP",
            "offlineID": "RebootNDUP",
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true,
            "visibility": false,
            "allowDisplayModeChange": true
        },
        "RebootNDUP": {
          "cxid": "RebootNDUP",
          "launcher": "js:OOBEReboot",
          "preloadCheck": "CloudExperienceHost.ExpeditedUpdate",
          "skipExitsCxh": true,
          "canExitCxh": true,
          "disableBackNavigationToNode": true,
          "visibility": false,
          "successID": "OobeEarlyExitOnFailure",
          "failID": "OobeEarlyExitOnFailure",
          "cancelID": "OobeEarlyExitOnFailure",
          "abortID": "OobeEarlyExitOnFailure"
        },
        "OobeEarlyExitOnFailure": {
            "cxid": "OobeEarlyExitOnFailure",
            "launcher": "js:OobeSkipNode",
            "canExitCxh": true,
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "OobeNetworkLossError": {
            "cxid": "OobeNetworkLossError",
            "frameAnimation": "errorLottie.json",
            "requiredFeatureName": "OobeNetworkReconnect",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeNetworkLossError-main.html",
            "successID": "ReconnectionEntry",
            "failID": "ReconnectionEntry",
            "cancelID": "ReconnectionEntry",
            "abortID": "ReconnectionEntry",
            "disableErrorPageOnFailure": true,
            "disableBackNavigationToNode": true,
            "disableBackNavigationFromNode": true,
            "visibility": false
        },
        "ReconnectionEntry": {
            "cxid": "ReconnectionEntry",
            "frameAnimation": "wifiLottie.json",
            "hostedApplicationLaunchArguments": "CloudExperienceHost.Environment.GetWiFiHostedApplicationArgumentsDesktopReconnect",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy!App",
            "successID": "InPlaceResume",
            "failID": "InPlaceResume",
            "cancelID": "InPlaceResume",
            "action1ID": "ReconnectCaptivePortal",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "ReconnectCaptivePortal": {
            "cxid": "ReconnectCaptivePortal",
            "launcher": "js:HostedApplication",
            "appUserModelId": "Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy!App",
            "successID": "ReconnectionEntry",
            "failID": "ReconnectionEntry",
            "cancelID": "ReconnectionEntry",
            "disableBackNavigationToNodeOnSuccess": true
        },
        "InPlaceResume": {
            "cxid": "InPlaceResume",
            "launcher": "js:InPlaceResume",
            "failID": "StartSelector",
            "disableBackNavigationToNode": true
        },
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetupInclusive.html",
            "successID": "rdxSecurity",
            "action1ID": "rdxShutdowns",
            "abortID": "rdxAdmin",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "rdxShutdowns": {
            "cxid": "RDXSHUTDOWNS",
            "frameAnimation": "wifiLottie.json",
            "url": "ms-appx-web:///RetailDemo/retailDemoShutdownsInclusive.html",
            "successID": "rdxSecurity",
            "cancelID": "rdxSetup",
            "failID": "rdxAdmin",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "rdxSecurity": {
            "cxid": "RDXSECURITY",
            "frameAnimation": "lockandpinLottie.json",
            "url": "ms-appx-web:///RetailDemo/retailDemoSecurityInclusive.html",
            "successID": "rdxMsa",
            "abortID": "rdxAdmin",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "rdxAdmin": {
            "cxid": "RDXADMIN",
            "url": "ms-appx-web:///RetailDemo/retailDemoAdmin.html",
            "successID": "rdxLocal",
            "disableBackNavigationToNode": true,
            "visibility": false
        },
        "rdxMsa": {
            "cxid": "RDXMSA",
            "url": "ms-appx-web:///RetailDemo/retailDemoMsaInclusive.html",
            "successID": "rdxLocal",
            "disableBackNavigationToNode": true,
            "cancelID": "msaSignIn",
            "offlineID": "msaSignIn",
            "internetRequired": true,
            "skipReconnectHandler": true
        },
        "msaSignIn": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
            "speechCapableOverride": false,
            "internetRequired": true,
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "abortID": "rdxLocal",
            "failID": "rdxLocal",
            "offlineID": "rdxLocal",
            "canExitCxh": true,
            "disableBackNavigationToNode": true,
            "skipReconnectHandler": true
        },
        "rdxLocal": {
            "cxid": "RDXLOCAL",
            "url": "ms-appx-web:///RetailDemo/retailDemoLocal.html",
            "disableBackNavigationToNode": true,
            "canExitCxh": true,
            "visibility": false
        }
    },
  "FRXMOBILE": {
    "start": "AAD",
    "notifyOnLastFinished": true,
    "AAD": {
      "cxid": "AAD",
      "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
      "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
      "showErrorPageOnFailure": true,
      "successID": "NGC"
    },
    "NGC": {
      "cxid": "NGC",
      "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
      "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
      "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
    }
  },
    "FRXMOBILEBULKAAD": {
        "start": "BULKAAD",
        "notifyOnLastFinished": true,
        "BULKAAD": {
            "cxid": "BULKAAD",
            "url": "ms-appx-web:///views/hololensWorkAccount.html",
            "failID": "BULKAAD",
            "backID": "BULKAAD"
        }
    },
    "FRXRDX": {
        "start": "rdxSetup",
        "msaTicketContext": "OOBE",
        "notifyOnFirstVisible": true,
        "notifyOnLastFinished": true,
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetup.html",
            "successID": "rdxSecurity",
            "action1ID": "rdxShutdowns",
            "abortID": "rdxAdmin",
            "visibility": false
        },
        "rdxShutdowns": {
            "cxid": "RDXSHUTDOWNS",
            "url": "ms-appx-web:///RetailDemo/retailDemoShutdowns.html",
            "successID": "rdxSecurity",
            "cancelID": "rdxSetup",
            "failID": "rdxAdmin",
            "visibility": false
        },
        "rdxSecurity": {
            "cxid": "RDXSECURITY",
            "url": "ms-appx-web:///RetailDemo/retailDemoSecurity.html",
            "successID": "rdxMsa",
            "failID": "rdxAdmin",
            "visibility": false
        },
        "rdxAdmin": {
            "cxid": "RDXADMIN",
            "url": "ms-appx-web:///RetailDemo/retailDemoAdmin.html",
            "successID": "rdxLocal",
            "visibility": false
        },
        "rdxMsa": {
            "cxid": "RDXMSA",
            "url": "ms-appx-web:///RetailDemo/retailDemoMsa.html",
            "successID": "rdxLocal",
            "cancelID": "msaSignIn"
        },
        "msaSignIn": {
            "cxid": "MSA",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "abortID": "rdxLocal",
            "failID": "rdxLocal",
            "offlineID": "rdxLocal",
            "showAccountErrorPageOnFailure": true
        },
        "rdxLocal": {
            "cxid": "RDXLOCAL",
            "url": "ms-appx-web:///RetailDemo/retailDemoLocal.html",
            "visibility": false
        }
    },
    "FRXRDXMOB": {
        "start": "rdxSetup",
        "notifyOnFirstVisible": true,
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetup.html",
            "successID": "rdxMsa",
            "failID": "rdxMsa",
            "visibility": false
        },
        "rdxMsa": {
            "cxid": "RDXMSA",
            "url": "ms-appx-web:///RetailDemo/retailDemoMsa.html"
        }
    },
    "RDXPOSTOOBE": {
        "start": "rdxSetup",
        "notifyOnFirstVisible": true,
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetup.html",
            "successID": "rdxSecurity",
            "action1ID": "rdxShutdowns",
            "visibility": false
        },
        "rdxShutdowns": {
            "cxid": "RDXSHUTDOWNS",
            "url": "ms-appx-web:///RetailDemo/retailDemoShutdowns.html",
            "successID": "rdxSecurity",
            "cancelID": "rdxSetup",
            "visibility": false
        },
        "rdxSecurity": {
            "cxid": "RDXSECURITY",
            "url": "ms-appx-web:///RetailDemo/retailDemoSecurity.html",
            "visibility": false
        }
    },
    "RDXPOSTOOBEINCLUSIVE": {
        "start": "rdxSetup",
        "notifyOnFirstVisible": true,
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetupInclusive.html",
            "successID": "rdxSecurity",
            "action1ID": "rdxShutdowns",
            "visibility": false
        },
        "rdxShutdowns": {
            "cxid": "RDXSHUTDOWNS",
            "url": "ms-appx-web:///RetailDemo/retailDemoShutdownsInclusive.html",
            "successID": "rdxSecurity",
            "cancelID": "rdxSetup",
            "visibility": false
        },
        "rdxSecurity": {
            "cxid": "RDXSECURITY",
            "url": "ms-appx-web:///RetailDemo/retailDemoSecurityInclusive.html",
            "visibility": false
        }
    },
    "RDXRACSKU": {
        "start": "rdxSetup",
        "notifyOnFirstVisible": true,
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetup.html",
            "action1ID": "rdxAdvanced",
            "visibility": false
        },
        "rdxAdvanced": {
            "cxid": "RDXADVANCED",
            "url": "ms-appx-web:///RetailDemo/retailDemoAdvanced.html",
            "action1ID": "rdxShutdowns",
            "visibility": false
        },
        "rdxShutdowns": {
            "cxid": "RDXSHUTDOWNS",
            "url": "ms-appx-web:///RetailDemo/retailDemoShutdowns.html",
            "cancelID": "rdxAdvanced",
            "visibility": false
        }
    },
    "RDXRACSKUINCLUSIVE": {
        "start": "rdxSetup",
        "notifyOnFirstVisible": true,
        "rdxSetup": {
            "cxid": "RDXSETUP",
            "url": "ms-appx-web:///RetailDemo/retailDemoSetupInclusive.html",
            "action1ID": "rdxAdvanced",
            "visibility": false
        },
        "rdxAdvanced": {
            "cxid": "RDXADVANCED",
            "url": "ms-appx-web:///RetailDemo/retailDemoAdvancedInclusive.html",
            "action1ID": "rdxShutdowns",
            "visibility": false
        },
        "rdxShutdowns": {
            "cxid": "RDXSHUTDOWNS",
            "url": "ms-appx-web:///RetailDemo/retailDemoShutdownsInclusive.html",
            "cancelID": "rdxAdvanced",
            "visibility": false
        }
    },
    "MSARDX": {
        "start": "msaAutocreate",
        "msaAutocreate": {
            "cxid": "MSA",
            "url": "https://account.live.com/rdm",
            "urlint": "https://account.live-int.com/rdm",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "XBOXCONNECT": {
        "start": "Connect",
        "msaTicketContext": "OOBE",
        "Connect": {
            "cxid": "Connect",
            "httpMethod": "post",
            "visibility": false,
            "timeout": 60000,
            "showErrorPageOnFailure": false,
            "encoding": "utf8",
            "contentType": "application/x-www-form-urlencoded",
            "url": "https://login.live.com/IfExists.srf?id=80501",
            "urlint": "https://login.live-int.com/IfExists.srf?id=80501",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForXbox",
            "initialize": {
                "getData": "CloudExperienceHost.MSA.getDevicePostData",
                "key": "DDA"
            }
        }
    },
    "XBOXCONNECTWITHEMAIL": {
        "start": "ConnectWithEmail",
        "msaTicketContext": "OOBE",
        "ConnectWithEmail": {
            "cxid": "ConnectWithEmail",
            "visibility": false,
            "timeout": 60000,
            "showErrorPageOnFailure": false,
            "url": "https://login.live.com/ppsecure/InlineLogin.srf?id=80501&fsui=1",
            "urlint": "https://login.live-int.com/ppsecure/InlineLogin.srf?id=80501&fsui=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForXboxConnectWithEmail"
        }
    },
    "MSAPINENROLL": {
        "start": "MSANGCEnroll",
        "MSANGCEnroll": {
            "cxid": "MSANGCEnroll",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll",
            "urlint": "https://account.live-int.com/msangc?fl=enroll",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSANGCEnroll"
        }
    },
    "MSAPINRESET": {
        "start": "MSANGCReset",
        "MSANGCReset": {
            "cxid": "MSANGCReset",
            "url": "https://account.live.com/msangc?fl=reset",
            "urlint": "https://account.live-int.com/msangc?fl=reset",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "MSANGCReset"
        }
    },
    "MSACFLPINRESET": {
        "start": "MSACflPinReset",
        "notifyOnFirstVisible": true,
        "msaTicketContext": "WindowsLogon",
        "MSACflPinReset": {
            "cxid": "MSACflPinReset",
            "url": "https://account.live.com/msangc?fl=reset&sscr=1&cxhcss=oobedesktop",
            "urlint": "https://account.live-int.com/msangc?fl=reset&sscr=1&cxhcss=oobedesktop",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "successID": "AADNGC",
            "showErrorPageOnFailure": true,
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "AADNGC": {
            "cxid": "AADNGC",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipAadNgcProvisioning",
            "preloadCheckSkipOnFailure": true,
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount"
        }
    },
    "MSACFLPINRESETSIGNIN": {
        "start": "msaCflPinResetSignIn",
        "error": "SSPRError",
        "speechCapable": true,
        "notifyOnFirstVisible": true,
        "notifyOnLastFinished": true,
        "frameName": "sspr-frame",
        "useCloseToExitCxh": true,
        "msaCflPinResetSignIn": {
            "cxid": "msaCflPinResetSignIn",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80609",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80609",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLoginWithScenarioContext",
            "customProperty": "MSACFLPINRESET",
            "offlineID": "SSPRError"
        },
        "SSPRError": {
            "cxid": "SSPRError",
            "url": "ms-appx-web:///webapps/inclusiveSspr/view/ssprerror-main.html",
            "visibility": false
        }
    },
    "MSACXSIGNINAUTHONLY": {
        "start": "CxSignIn",
        "msaTicketBroker": true,
        "msaTicketContext": "WindowsLogon",
        "CxSignIn": {
            "cxid": "CxSignIn",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80610",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80610",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "initialize": {
                "getData": "CloudExperienceHost.MSA.getIdentityAppPropertiesHeader",
                "key": "ms-identity-app-properties"
            },
            "showErrorPageOnFailure": true,
            "offlineID": "CxSignInError"
        },
        "CxSignInError": {
            "cxid": "CxSignInError",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "CxSignIn"
        }
    },
    "MSACXSIGNINPINRESET": {
        "start": "CxSignIn",
        "msaTicketBroker": true,
        "msaTicketContext": "WindowsLogon",
        "CxSignIn": {
            "cxid": "CxSignIn",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80610",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80610",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "initialize": {
                "getData": "CloudExperienceHost.MSA.getIdentityAppPropertiesHeader",
                "key": "ms-identity-app-properties"
            },
            "showErrorPageOnFailure": true,
            "offlineID": "CxSignInError",
            "successID": "CxPinReset"
        },
        "CxSignInError": {
            "cxid": "CxSignInError",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "CxSignIn"
        },
        "CxPinReset": {
            "cxid": "CxPinReset",
            "url": "https://account.live.com/msangc?fl=reset",
            "urlint": "https://account.live-int.com/msangc?fl=reset",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "CxPinReset"
        }
    },
    "MSACXSIGNINPINADD": {
        "start": "CxSignIn",
        "msaTicketBroker": true,
        "msaTicketContext": "WindowsLogon",
        "CxSignIn": {
            "cxid": "CxSignIn",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80610",
            "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80610",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "initialize": {
                "getData": "CloudExperienceHost.MSA.getIdentityAppPropertiesHeader",
                "key": "ms-identity-app-properties"
            },
            "showErrorPageOnFailure": true,
            "offlineID": "CxSignInError",
            "successID": "CxHello"
        },
        "CxSignInError": {
            "cxid": "CxSignInError",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "CxSignIn"
        },
        "CxHello": {
            "cxid": "CxHello",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "ms-appx-web:///views/helloEnrollment.html",
            "ignoreResult": true,
            "successID": "CxHelloEnroll",
            "failID": "CxPinEnroll",
            "cancelID": "CxPinEnroll",
            "abortID": "CxPinEnroll",
            "visibility": false
        },
        "CxHelloEnroll": {
            "cxid": "CxHelloEnroll",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll&hello=1",
            "urlint": "https://account.live-int.com/msangc?fl=enroll&hello=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "offlineID": "OfflineHello",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "OfflineHello": {
            "cxid": "OfflineHello",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "CxHelloEnroll"
        },
        "CxPinEnroll": {
            "cxid": "CxPinEnroll",
            "preloadCheck": "CloudExperienceHost.MSA.ShouldSkipNGCEnroll",
            "preloadCheckSkipOnFailure": true,
            "url": "https://account.live.com/msangc?fl=enroll",
            "urlint": "https://account.live-int.com/msangc?fl=enroll",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForAccount",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "visibility": false,
            "intraWebAppVisibility": false
        },
        "Offline": {
            "cxid": "Offline",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "CxPinEnroll"
        }
    },
  "FRXHOLOLENS": {
    "start": "EULA",
    "msaTicketContext": "OOBE",
    "EULA": {
      "cxid": "EULA",
      "preloadCheck": "CloudExperienceHostAPI.OobeEulaManagerStaticsCore",
      "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeEula-hololens.html",
      "timeout": 30000,
      "successID": "IDPS",
      "failID": "IDPS",
      "visibility": false
    },
    "IDPS": {
      "cxid": "IDPS",
      "ignoreResult": true,
      "url": "https://sdx.microsoft.com/frx/idps",
      "urlint": "https://sdx.microsoft-ppe.com/frx/idps",
      "showErrorPageOnFailure": true,
      "offlineID": "OFFLINE",
      "visibility": false
    },
    "AAD": {
      "cxid": "AAD",
      "url": "https://login.microsoftonline.com/WebApp/CloudDomainJoin/10",
      "urlint": "https://login.windows-ppe.net/WebApp/CloudDomainJoin/10",
      "cancelID": "IDPS",
      "abortID": "IDPS",
      "failID": "DIAG",
      "offlineID": "OFFLINE",
      "initialize": {
        "getData": "CloudExperienceHost.getAllowedIdentityProviders",
        "key": "cxh-idps"
      }
    },
    "MSA": {
      "cxid": "MSA",
      "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80600",
      "urlint": "https://login.live-int.com/ppsecure/inlineconnect.srf?id=80600",
      "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
      "cancelID": "IDPS",
      "abortID": "IDPS",
      "offlineID": "OFFLINE",
      "showErrorPageOnFailure": true
    },
    "BULKAAD": {
      "cxid": "BULKAAD",
      "url": "ms-appx-web:///views/hololensWorkAccount.html",
      "failID": "BULKAAD",
      "backID": "BULKAAD"
    },
    "DIAG": {
      "cxid": "DIAG",
      "url": "ms-appx-web:///webapps/hololensDiagnostics/views/hololensDiagnostics.html",
      "cancelID": "AAD",
      "failID": "IDPS",
      "abortID": "IDPS"
    },
    "OFFLINE": {
      "cxid": "OFFLINE",
      "url": "ms-appx-web:///views/nointernet.html",
      "visibility": false,
      "showErrorPageOnFailure": true,
      "successID": "IDPS"
    }
  },
    "FRXHOLOLENSAUTOPILOT": {
        "start": "StartSelector",
        "error": "OobeError",
        "msaTicketContext": "OOBE",
        "useBackstackForBackNavigation": true,
        "frameName": "default-frame",
        "blockLateWebAppCalls": true,
        "StartSelector": {
            "cxid": "StartSelector",
            "launcher": "js:OOBEStartSelector",
            "successID": "AutoPilotPrefetch",
            "visibility": false
        },
        "OobeError": {
            "cxid": "OobeError",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "AutoPilotPrefetch": {
            "cxid": "AutoPilotPrefetch",
            "policyName": "prefetch",
            "launcher": "js:OOBEAutoPilot",
            "internetRequired": true,
            "successID": "AutoPilotVetoESTS",
            "failID": "OobeError",
            "cancelID": "OobeError",
            "offlineID": "OobeError",
            "disableErrorPageOnFailure": true,
            "visibility": false,
            "timeout": 60000
        },
        "AutoPilotVetoESTS": {
            "cxid": "AutoPilotVetoESTS",
            "url": "https://login.microsoftonline.com/webapp/AutoPilot/2",
            "urlint": "https://login.windows-ppe.net/webapp/AutoPilot/2",
            "queryStringBuilder": "CloudExperienceHost.AutoPilot.getZTDQueryStringAsync",
            "preloadCheck": "CloudExperienceHost.AutoPilot.Veto",
            "preloadCheckSkipOnFailure": true,
            "successID": "AutoPilotDeviceRename",
            "failID": "AutoPilotDeviceRename",
            "action1ID": "AutoPilotDeviceRename",
            "visibility": false,
            "disableBackNavigationToNode": true
        },
        "AutoPilotDeviceRename": {
            "cxid": "AutoPilotDeviceRename",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/Oobeautopilotreboot-main.html",
            "preloadCheck": "CloudExperienceHost.AutoPilot.ShouldSkipDeviceRename",
            "preloadCheckSkipOnFailure": true,
            "successID": "Reboot",
            "failID": "Reboot",
            "disableBackNavigationToNodeOnSuccess": true,
            "disableErrorPageOnFailure": true,
            "visibility": false
        },
        "Reboot": {
            "cxid": "Reboot",
            "launcher": "js:OOBEReboot",
            "successID": "AutopilotEnrollmentStatus",
            "failID": "AutopilotEnrollmentStatus",
            "visibility": false
        },
        "AutopilotEnrollmentStatus": {
            "cxid": "AutopilotEnrollmentStatus",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/autopilotespprogress-main.html",
            "disableBackNavigationToNode": true,
            "action1ID": "Reboot",
            "canExitCxh": true,
            "visibility": false
        }
    },
    "FRXHOLOLENSCORTANA": {
        "start": "OobeCortana",
        "OobeCortana": {
            "cxid": "OobeCortana",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/OobeCortana-main.html",
            "ignoreResult": true,
            "visibility": false,
            "disableErrorPageOnFailure": true
        }
    },
    "FRXHOLOLENSPRIVACYLEARNMORE": {
        "start": "OobePrivacyLearnMore",
        "OobePrivacyLearnMore": {
            "cxid": "OobePrivacyLearnMore",
            "url": "https://go.microsoft.com/fwlink/p/?linkid=850746",
            "ignoreResult": true,
            "visibility": true,
            "disableErrorPageOnFailure": true
        }
    },
    "FRXHOLOLENSSPEECHLEARNMORE": {
        "start": "OobeSpeechLearnMore",
        "OobeSpeechLearnMore": {
            "cxid": "OobeSpeechLearnMore",
            "url": "https://aka.ms/hololensprivacyspeech",
            "ignoreResult": true,
            "visibility": true,
            "disableErrorPageOnFailure": true
        }
    },
    "FRXHOLOLENSLOCATIONLEARNMORE": {
        "start": "OobeLocationLearnMore",
        "OobeLocationLearnMore": {
            "cxid": "OobeLocationLearnMore",
            "url": "https://aka.ms/hololensprivacylocation",
            "ignoreResult": true,
            "visibility": true,
            "disableErrorPageOnFailure": true
        }
    },
    "AMX": {
        "start": "DYNAMICPAGE",
        "DYNAMICPAGE": {
            "cxid": "DYNAMICPAGE",
            "url": "https://account.microsoft.com",
            "urlPathParam": "target",
            "failID": "FALLBACK"
        },
        "FALLBACK": {
            "cxid": "FALLBACK",
            "url": "https://account.microsoft.com",
            "urlPathParam": "fallback",
            "showErrorPageOnFailure": true
        }
    },
    "WLTUC": {
        "start": "ADDUSER",
        "ADDUSER": {
            "cxid": "ADDUSER",
            "url": "https://login.live.com/ppsecure/inlineconnect.srf?id=80601",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForLogin",
            "successID": "WLTFLOW",
            "showErrorPageOnFailure": true
        },
        "WLTFLOW": {
            "cxid": "WLTFLOW",
            "url": "https://sdx.microsoft.com/wlt",
            "urlint": "https://sdx.microsoft-ppe.com/wlt",
            "failID": "WLTERR"
        },
        "WLTERR": {
            "cxid": "WLTERR",
            "url": "https://sdx.microsoft.com/wlt/error",
            "urlint": "https://sdx.microsoft-ppe.com/wlt/error"
        }
    },
    "WLT": {
        "start": "WLTFLOW",
        "WLTFLOW": {
            "cxid": "WLTFLOW",
            "url": "https://sdx.microsoft.com/wlt",
            "urlint": "https://sdx.microsoft-ppe.com/wlt",
            "failID": "WLTERR"
        },
        "WLTERR": {
            "cxid": "WLTERR",
            "url": "https://sdx.microsoft.com/wlt/error",
            "urlint": "https://sdx.microsoft-ppe.com/wlt/error"
        }
    },
    "WLTEST": {
        "start": "WLTEST",
        "WLTEST": {
            "cxid": "WLTEST",
            "url": "https://sdx.microsoft-ppe.com/wlt/test"
        }
    },
    "AADSSPR": {
        "start": "SSPR",
        "error": "SSPRError",
        "notifyOnFirstVisible": true,
        "frameName": "sspr-frame",
        "useCloseToExitCxh": true,
        "notifyOnLastFinished": true,
        "SSPR": {
            "cxid": "SSPR",
            "url": "https://passwordreset.microsoftonline.com/n/passwordreset?experience=WIN10_TB",
            "queryStringBuilder": "CloudExperienceHost.MSA.getAadSscrParameters",
            "offlineID": "SSPRError"
        },
        "SSPRError": {
            "cxid": "SSPRError",
            "url": "ms-appx-web:///webapps/inclusiveSspr/view/ssprerror-main.html",
            "visibility": false
        }
    },
    "AADSSPRV2": {
        "start": "SSPR",
        "error": "SSPRError",
        "notifyOnFirstVisible": true,
        "frameName": "sspr-frame",
        "notifyOnLastFinished": true,
        "SSPR": {
            "cxid": "SSPR",
            "url": "https://passwordreset.microsoftonline.com/n/passwordreset?experience=WIN10_TB",
            "queryStringBuilder": "CloudExperienceHost.MSA.getAadSscrParameters",
            "offlineID": "SSPRError"
        },
        "SSPRError": {
            "cxid": "SSPRError",
            "url": "ms-appx-web:///webapps/inclusiveSspr/view/ssprerror-main.html",
            "visibility": false
        }
    },
    "AADPINRESETAUTH": {
        "start": "AadPinResetAuth",
        "error": "SSPRError",
        "speechCapable": true,
        "notifyOnFirstVisible": true,
        "notifyOnLastFinished": true,
        "frameName": "sspr-frame",
        "restrictNavigationToAllowList": true,
        "useCloseToExitCxh": true,
        "AadPinResetAuth": {
            "cxid": "AadPinResetAuth",
            "url": "https://login.microsoftonline.com/WebApp/WindowsLogon/1",
            "urlint": "https://login.windows-ppe.net/WebApp/WindowsLogon/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getAadSscrParameters",
            "failID": "SSPRError",
            "offlineID": "SSPRError"
        },
        "SSPRError": {
            "cxid": "SSPRError",
            "url": "ms-appx-web:///webapps/inclusiveSspr/view/ssprerror-main.html",
            "visibility": false
        }
    },
    "AADPINRESETV2": {
        "start": "AadPinResetAuth",
        "error": "SSPRError",
        "notifyOnFirstVisible": true,
        "restrictNavigationToAllowList": true,
        "useCloseToExitCxh": true,
        "convertMsAppxWebNavigationToPrivateData": {
            "hostToInterrupt": "microsoft.aad.brokerplugin",
            "privateKeyName": "msAadjRedirQueryTerms"
        },
        "AadPinResetAuth": {
            "cxid": "AadPinResetAuth",
            "url": "https://login.microsoftonline.com/WebApp/WindowsLogon/1",
            "urlint": "https://login.windows-ppe.net/WebApp/WindowsLogon/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getAadSscrParameters",
            "failID": "SSPRError",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline",
            "action1ID": "NGC",
            "action2ID": "NGCNonDestructiveOnly",
            "action3ID": "NGCDestructiveOnly"
        },
        "SSPRError": {
            "cxid": "SSPRError",
            "url": "ms-appx-web:///webapps/inclusiveSspr/view/ssprerror-main.html",
            "visibility": false
        },
        "NGC": {
          "cxid": "NGC",
          "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
          "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
          "showErrorPageOnFailure": true,
          "offlineID": "Offline"
        },
        "NGCNonDestructiveOnly": {
            "cxid": "NGCNonDestructiveOnly",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline"
        },
        "NGCDestructiveOnly": {
            "cxid": "NGCDestructiveOnly",
            "url": "https://login.microsoftonline.com/webapp/windowsngc/1",
            "urlint": "https://login.windows-ppe.net/webapp/windowsngc/1",
            "showErrorPageOnFailure": true,
            "offlineID": "Offline"
        },
        "Offline": {
          "cxid": "Offline",
          "url": "ms-appx-web:///views/nointernet.html",
          "visibility": false,
          "showErrorPageOnFailure": true,
          "successID": "NGC"
        }
    },
    "AADWEBAUTH": {
        "start": "AadWebAuth",
        "error": "AadWebAuthError",
        "restrictNavigationToAllowList": true,
        "AadWebAuth": {
            "cxid": "AadWebAuth",
            "url": "https://login.microsoftonline.com/WebApp/WindowsLogon/1",
            "urlint": "https://login.windows-ppe.net/WebApp/WindowsLogon/1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getAadSscrParameters",
            "failID": "AadWebAuthError",
            "offlineID": "AadWebAuthError"
        },
        "AadWebAuthError": {
            "cxid": "AadWebAuthError",
            "url": "ms-appx-web:///views/nointernet.html",
            "visibility": false,
            "showErrorPageOnFailure": true,
            "successID": "AadWebAuth"
        }
    },
    "MSASSPR": {
        "start": "SSPR",
        "error": "SSPRError",
        "notifyOnFirstVisible": true,
        "notifyOnLastFinished": true,
        "speechCapable": true,
        "frameName": "sspr-frame",
        "useCloseToExitCxh": true,
        "SSPR": {
            "cxid": "SSPR",
            "url": "https://account.live.com/password/reset?sscr=1",
            "urlint": "https://account.live-int.com/password/reset?sscr=1",
            "queryStringBuilder": "CloudExperienceHost.MSA.getContextParametersForSSPR",
            "showErrorPageOnFailure": true,
            "offlineID": "SSPRError"
        },
        "SSPRError": {
            "cxid": "SSPRError",
            "url": "ms-appx-web:///webapps/inclusiveSspr/view/ssprerror-main.html",
            "visibility": false
        }
    },
    "FRXDIAGNOSTICS": {
        "start": "OobeDiagnostics",
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "speechCapable": true,
        "notifyOnFirstVisible": true,
        "notifyOnLastFinished": true,
        "OobeDiagnostics": {
            "cxid": "OobeDiagnostics",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/autopilot/troubleshootingdiagnostics-lite-main.html",
            "disableBackNavigationToNode": true,
            "disableBackNavigationToNodeOnSuccess": true,
            "visibility": false
        }
    },
    "NTHBIOCONSENT": {
        "start": "UnusedBioConsent",
        "error": "Error",
        "notifyOnFirstVisible": true,
        "speechCapable": true,
        "speechDisabled": true,
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "Error": {
            "cxid": "Error",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/oobeError-main.html",
            "visibility": false
        },
        "UnusedBioConsent": {
            "cxid": "UnusedBioConsent",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/hellobioconsent-main.html",
            "failID": "ExitOnFailure",
            "visibility": false
        },
        "ExitOnFailure": {
            "cxid": "ExitOnFailure",
            "launcher": "js:OobeSkipNode",
            "disableErrorPageOnFailure": true,
            "visibility": false
        }
    },
    "NTHPDE": {
        "start": "PersonalDataExportNotice",
        "notifyOnFirstVisible": true,
        "disableErrorPageOnFailure": true,
        "speechCapable": true,
        "speechDisabled": true,
        "frameName": "oobe-light-frame",
        "personality": "CloudExperienceHost.Personality.LiteWhite",
        "PersonalDataExportNotice": {
            "cxid": "PersonalDataExportNotice",
            "frameAnimation": "privacysettingsLottie.json",
            "url": "ms-appx-web:///webapps/inclusiveOobe/view/personalDataExport-main.html",
            "failID": "ExitOnFailure",
            "visibility": false
        },
        "ExitOnFailure": {
            "cxid": "ExitOnFailure",
            "launcher": "js:OobeSkipNode",
            "disableErrorPageOnFailure": true,
            "visibility": false
        }
    },
    "NTHWASC": {
       "start": "NthWindowsAccountSyncConsent",
       "notifyOnFirstVisible": true,
       "disableErrorPageOnFailure": true,
       "speechCapable": true,
       "speechDisabled": true,
       "frameName": "oobe-light-frame",
       "personality": "CloudExperienceHost.Personality.LiteWhite",
       "NthWindowsAccountSyncConsent": {
          "cxid": "NthWindowsAccountSyncConsent",
          "url": "https://sdx.microsoft.com/frx/windows-account-sync-consent/nthlogon",
          "urlint": "https://sdx.microsoft-int.com/frx/windows-account-sync-consent/nthlogon",
          "internetRequired": true,
          "skipReconnectHandler": true,
          "failID": "ExitOnFailure",
          "cancelID": "ExitOnFailure",
          "abortID": "ExitOnFailure",
          "offlineID": "ExitOnFailure",
          "disableErrorPageOnFailure": true,
          "visibility": false,
          "intraWebAppVisibility": false
       },
       "ExitOnFailure": {
          "cxid": "ExitOnFailure",
          "launcher": "js:OobeSkipNode",
          "disableErrorPageOnFailure": true,
          "visibility": false
       }
    }
}
