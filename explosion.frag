#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D explosion;
uniform float slice = 1.0/30.0;
uniform float time;

void main()
{
    int frame = int(time/slice)%48;
    int col = frame%8;
    int fila = 5 - frame/8;
    
    vec2 novaTexCoords = vec2((vtexCoord.s + col) * 1.0/8.0, (vtexCoord.t + fila) * 1.0/6.0);
    vec4 color = texture(explosion, novaTexCoords);
    fragColor = color.a * color;
}
