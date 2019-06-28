using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace Blazor
{
    public static class BlazorExtensions
    {
        public static T Invoke<T>(this IJSRuntime js, string identifier, params object[] args)
        {
            return Task.Run(async () => await js.InvokeAsync<T>(identifier, args)).Result;
        }
    }
}
